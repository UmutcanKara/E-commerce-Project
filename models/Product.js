const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  products: [
    {
      pictures: {
        type: [String],
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      category: {
        type: [String],
        required: true,
      },
      details: [
        {
          condition: {
            type: String,
            required: true,
          },
          model: {
            type: String,
            required: true,
          },
          brand: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          notes: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

module.exports = Products = mongoose.model("products", ProductSchema);
