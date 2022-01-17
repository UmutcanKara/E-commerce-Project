const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  avatar: {
    type: String,
  },
  company: {
    type: String,
  },
  bio: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  rating: {
    rate: {
      type: Number,
    },
    total: {
      type: Number,
    },
    avarage: {
      type: Number,
    },
  },
});

module.exports = Store = mongoose.model("store", StoreSchema);
