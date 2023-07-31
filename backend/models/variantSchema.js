const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const variantSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: String,
  },
  color: {
    type: [String],
  },
  image: {
    type: String,
  },
  storage: {
    type: String,
  },
  ram: {
    type: String,
  },
  size: {
    type: String,
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Variants", variantSchema);
