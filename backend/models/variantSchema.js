const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const variantSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  products: {
    type: Schema.Types.ObjectId,
    ref: "Products",
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
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
