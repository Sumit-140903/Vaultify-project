import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  registeredAt: {
    type: Date,
    default: Date.now,
  },
  documents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document"
    }
  ]
});

let User;

if (mongoose.connection && mongoose.connection.readyState === 1) {
  User = mongoose.model("User", userSchema);
} else {
  // In-memory fallback for development when DB is not connected
  const users = [];

  const match = (obj, query) => {
    return Object.keys(query).every((k) => {
      if (typeof query[k] === 'string') {
        return (obj[k] || '').toLowerCase() === query[k].toLowerCase();
      }
      return obj[k] === query[k];
    });
  };

  User = {
    async findOne(query) {
      const u = users.find((x) => match(x, query));
      return u ? { ...u } : null;
    },
    async create(data) {
      const doc = { ...data, _id: mongoose.Types.ObjectId(), documents: data.documents || [], registeredAt: data.registeredAt || new Date() };
      users.push(doc);
      return { ...doc };
    },
    async findByIdAndUpdate(id, update) {
      const idx = users.findIndex((u) => String(u._id) === String(id));
      if (idx === -1) return null;
      const user = users[idx];
      // simple support for $push and $pull
      if (update.$push) {
        for (const k of Object.keys(update.$push)) {
          user[k] = user[k] || [];
          user[k].push(update.$push[k]);
        }
      }
      if (update.$pull) {
        for (const k of Object.keys(update.$pull)) {
          user[k] = (user[k] || []).filter((item) => String(item) !== String(update.$pull[k]));
        }
      }
      users[idx] = user;
      return { ...user };
    },
    async findById(id) {
      const u = users.find((x) => String(x._id) === String(id));
      return u ? { ...u } : null;
    },
    // helper for tests/debug
    _dump() { return users; }
  };
}

export default User;
