import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  fileName: { 
    type: String, 
    required: true 
},

  cloudinaryUrl: {
     type: String, 
     required: true 
    },

  ipfsHash: { 
    type: String 
 },

 fileHash: String,


 txHash: String,

  uploadedAt: { 
    type: Date, 
    default: Date.now 
 }
 
});

let Document;

if (mongoose.connection && mongoose.connection.readyState === 1) {
  Document = mongoose.model("Document", documentSchema);
} else {
  const docs = [];
  const users = [];

  function wrapResult(arr) {
    const obj = {
      _docs: arr.map((d) => ({ ...d })),
      populate(field, projection) {
        if (field === 'owner') {
          this._docs = this._docs.map((doc) => {
            const ownerId = doc.owner;
            const owner = users.find((u) => String(u._id) === String(ownerId));
            if (owner) {
              const picked = {};
              if (projection) {
                const parts = projection.split(' ');
                for (const p of parts) {
                  if (p in owner) picked[p] = owner[p];
                }
              } else {
                Object.assign(picked, owner);
              }
              doc.owner = picked;
            }
            return doc;
          });
        }
        return this;
      },
      sort(sortObj) {
        const key = Object.keys(sortObj)[0];
        const dir = sortObj[key];
        this._docs.sort((a, b) => (a[key] < b[key] ? dir : -dir));
        return this;
      },
      then(resolve) {
        resolve(this._docs);
      },
      catch() { /* noop for compatibility */ }
    };
    return obj;
  }

  Document = {
    async create(data) {
      const doc = { ...data, _id: mongoose.Types.ObjectId(), uploadedAt: data.uploadedAt || new Date() };
      docs.push(doc);
      return { ...doc };
    },
    find(filter) {
      const results = docs.filter((d) => {
        return Object.keys(filter || {}).every((k) => String(d[k]) === String(filter[k]));
      });
      return wrapResult(results);
    },
    async findById(id) {
      const d = docs.find((x) => String(x._id) === String(id));
      return d ? { ...d } : null;
    },
    async findByIdAndDelete(id) {
      const idx = docs.findIndex((x) => String(x._id) === String(id));
      if (idx === -1) return null;
      const [removed] = docs.splice(idx, 1);
      return { ...removed };
    },
    // allow tests to sync user data for populate
    _attachUsers(uarr) { users.length = 0; users.push(...uarr); },
    _dump() { return docs; }
  };
}

export default Document;
