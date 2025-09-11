import mongoose from "mongoose";

const accessRequestSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  document: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Document",
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },
  lastCheckedAccessRequests: { 
    type: Date, 
    default: new Date(0) 
 },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

let AccessRequest;

if (mongoose.connection && mongoose.connection.readyState === 1) {
  AccessRequest = mongoose.model("AccessRequest", accessRequestSchema);
} else {
  const items = [];

  AccessRequest = {
    async create(data) {
      const doc = { ...data, _id: mongoose.Types.ObjectId(), createdAt: data.createdAt || new Date() };
      items.push(doc);
      return { ...doc };
    },
    async find(filter) {
      return items.filter((d) => Object.keys(filter || {}).every((k) => String(d[k]) === String(filter[k])));
    },
    async findOne(filter) {
      return items.find((d) => Object.keys(filter || {}).every((k) => String(d[k]) === String(filter[k]))) || null;
    },
    async findByIdAndUpdate(id, update) {
      const idx = items.findIndex((x) => String(x._id) === String(id));
      if (idx === -1) return null;
      const item = items[idx];
      Object.assign(item, update);
      items[idx] = item;
      return { ...item };
    },
    async findById(id) {
      const it = items.find((x) => String(x._id) === String(id));
      return it ? { ...it } : null;
    },
    _dump() { return items; }
  };
}

export default AccessRequest;
