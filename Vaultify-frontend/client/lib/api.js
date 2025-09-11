const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export function getToken() {
  try {
    return localStorage.getItem("vaultifyToken");
  } catch {
    return null;
  }
}

export function setToken(token) {
  try {
    localStorage.setItem("vaultifyToken", token);
  } catch {}
}

export function clearToken() {
  try {
    localStorage.removeItem("vaultifyToken");
  } catch {}
}

export async function apiFetch(path, opts = {}) {
  const url = path.startsWith("/") ? `${BASE_URL}${path}` : `${BASE_URL}/${path}`;

  const token = getToken();

  const headers = Object.assign({}, opts.headers || {});

  // Let fetch set the right Content-Type for FormData bodies
  if (!(opts.body instanceof FormData)) {
    headers["Content-Type"] = headers["Content-Type"] || "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method: opts.method || (opts.body ? "POST" : "GET"),
    headers,
    body: opts.body instanceof FormData ? opts.body : opts.body ? JSON.stringify(opts.body) : undefined,
    credentials: opts.credentials || "include",
  });

  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    // not JSON
  }

  if (!res.ok) {
    const err = new Error(`API request failed: ${res.status}`);
    err.status = res.status;
    err.body = json || text;
    throw err;
  }

  return json;
}
