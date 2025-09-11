import mongoose from "mongoose";

const connectDB = async () => {
  let uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("MONGODB_URI is not defined in environment variables. Please set it and retry.");
    return false;
  }

  // If user supplied an SRV URI but accidentally included a port, try to auto-correct it.
  if (uri.startsWith("mongodb+srv://")) {
    try {
      const scheme = "mongodb+srv://";
      const withoutScheme = uri.slice(scheme.length);
      const firstSlash = withoutScheme.indexOf("/");
      const hostPart = firstSlash === -1 ? withoutScheme : withoutScheme.slice(0, firstSlash);
      const rest = firstSlash === -1 ? "" : withoutScheme.slice(firstSlash);

      // hostPart may contain credentials like user:pass@hosts
      const atIndex = hostPart.indexOf("@");
      const creds = atIndex !== -1 ? hostPart.slice(0, atIndex + 1) : ""; // include '@' if present
      const hosts = atIndex !== -1 ? hostPart.slice(atIndex + 1) : hostPart;

      // Normalize hosts: split by comma and remove any ':<port>' suffix
      const fixedHosts = hosts
        .split(",")
        .map((h) => h.trim())
        .filter(Boolean)
        .map((h) => h.replace(/:\d+$/g, ""))
        .join(",");

      const fixedHostPart = `${creds}${fixedHosts}`;
      const fixedUri = `${scheme}${fixedHostPart}${rest}`;

      if (fixedUri !== uri) {
        console.warn("Detected mongodb+srv URI with port(s). Auto-fixing by removing port numbers from host portion.");
        console.warn("Original MONGODB_URI (redacted):", redactUri(uri));
        console.warn("Fixed MONGODB_URI (redacted):", redactUri(fixedUri));
        uri = fixedUri;
      }
    } catch (e) {
      // parsing failed, fall through and let mongoose report a clearer error
      console.warn("Failed to auto-parse MONGODB_URI for correction. Proceeding with original value.");
    }
  }

  // Ensure credentials are URL-encoded to avoid auth failures with special characters
  uri = ensureEncodedCreds(uri);

  try {
    const conn = await mongoose.connect(uri, { });
    const hostInfo = (conn && conn.connection && (conn.connection.host || conn.connection.name)) || (mongoose.connection && mongoose.connection.name) || 'unknown';
    console.log(`MongoDB Connected: ${hostInfo}`);
    return true;
  } catch (error) {
    // If error is caused by using mongodb+srv with port numbers, attempt a fallback
    const msg = String(error && error.message ? error.message : error);
    if (msg.includes('mongodb+srv') && msg.includes('port')) {
      try {
        // Try switching scheme to mongodb:// (non-SRV) which allows explicit ports
        let alt = uri.replace(/^mongodb\+srv:\/\//i, 'mongodb://');
        // If credentials contain unsafe characters, encode them
        try {
          const schemeEnd = alt.indexOf('://');
          const rest = alt.slice(schemeEnd + 3);
          const at = rest.indexOf('@');
          if (at !== -1) {
            const creds = rest.slice(0, at);
            const after = rest.slice(at + 1);
            // creds expected as user:pass (pass may include colons)
            const colonIndex = creds.indexOf(":");
            if (colonIndex !== -1) {
              const user = creds.slice(0, colonIndex);
              const pass = creds.slice(colonIndex + 1);
              const encoded = `${encodeURIComponent(user)}:${encodeURIComponent(pass)}`;
              alt = alt.slice(0, schemeEnd + 3) + `${encoded}@` + after;
            } else {
              // only user present
              alt = alt.slice(0, schemeEnd + 3) + `${encodeURIComponent(creds)}@` + after;
            }
          }
        } catch (e) {
          // ignore encoding errors
        }

        console.warn('Initial SRV connection failed. Retrying with mongodb:// scheme using the provided hosts/ports (non-SRV).');
        console.warn('Attempting with (redacted):', redactUri(alt));
        const conn2 = await mongoose.connect(alt, {});
        console.log(`MongoDB Connected (fallback): ${conn2.connection.host}`);
        return;
      } catch (err2) {
        console.error('Fallback connection attempt failed:', err2.message || err2);
        return false;
      }
    }

    if (/auth/i.test(msg)) {
      console.error("Authentication failed connecting to MongoDB. Common causes: incorrect username/password, password needs URL-encoding (e.g., @ -> %40), user lacks access to the target database, or your IP isn't in the Atlas access list.");
    }
    console.error(`Error connecting to MongoDB: ${error.message}`);
    return false;
  }
};

function redactUri(u) {
  try {
    // remove credentials for logging
    const schemeEnd = u.indexOf('://');
    if (schemeEnd === -1) return 'REDACTED';
    const scheme = u.slice(0, schemeEnd + 3);
    const rest = u.slice(schemeEnd + 3);
    const at = rest.indexOf('@');
    if (at === -1) return scheme + rest.replace(/(?<=@?).*/,'REDACTED');
    const after = rest.slice(at + 1);
    return scheme + 'REDACTED@' + after;
  } catch {
    return 'REDACTED';
  }
}

function ensureEncodedCreds(u) {
  try {
    const schemeEnd = u.indexOf('://');
    if (schemeEnd === -1) return u;
    const scheme = u.slice(0, schemeEnd + 3);
    const rest = u.slice(schemeEnd + 3);
    const at = rest.indexOf('@');
    if (at === -1) return u; // no credentials present
    const creds = rest.slice(0, at);
    const after = rest.slice(at + 1);

    // Split out username:password (password may contain colons)
    const colonIndex = creds.indexOf(":");
    let encoded;
    if (colonIndex !== -1) {
      const user = creds.slice(0, colonIndex);
      const pass = creds.slice(colonIndex + 1);
      const encUser = encodeURIComponent(decodeURIComponentSafe(user));
      const encPass = encodeURIComponent(decodeURIComponentSafe(pass));
      encoded = `${encUser}:${encPass}`;
    } else {
      encoded = encodeURIComponent(decodeURIComponentSafe(creds));
    }

    return scheme + encoded + '@' + after;
  } catch {
    return u;
  }
}

function decodeURIComponentSafe(s) {
  try { return decodeURIComponent(s); } catch { return s; }
}

export default connectDB;
