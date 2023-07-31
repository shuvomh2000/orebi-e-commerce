const User = require("../models/usersModel.js");
const Products = require("../models/productSchema.js");
const Variants = require("../models/variantSchema.js");

async function secureUpload(req, res, next) {
  let merchantId = req.headers.authorization.split("@")[1];
  let merchantKey = req.headers.authorization.split("@")[2];

  if (!req.headers.authorization) {
    return res.send({ error: "unauthorized" });
  }

  let data = await User.find({ _id: merchantId });

  if (data.length > 0) {
    if (merchantKey == process.env.MERCENT_SECRET_KEY) {
      if (data[0].role == "merchant") {
        next();
      } else {
        return res.send({ error: "you are not able to create product!" });
      }
    } else {
      return res.send({ error: "you are not able to create product!" });
    }
  } else {
    return res.send({ error: "you are not able to create product!" });
  }
}

async function createUplaod(req, res) {
  const { name, description, image, store } = req.body;

  if (!name) {
    return res.send({ eroor: "Product name required" });
  } else if (!description) {
    return res.send({ eroor: "Product description required" });
  } else if (!image) {
    return res.send({ eroor: "Product image required" });
  } else {
    const product = new Products({
      name,
      description,
      image,
      store,
    })
    product.save()
    res.send({ success: "Product create successfully" });
  }
}

async function createVariant(req, res) {
  const { product, price, quantity, color, image, storage, ram, size } =
    req.body;

  let variant = new Variants({
    product,
    price,
    quantity,
    color,
    image,
    storage,
    ram,
    size,
  })
  variant.save();

  await Products.findOneAndUpdate(
    { _id: variant.product },
    { $push: { variants: variant._id } },
    { new: true }
  );

  res.send({ success: "variant create successfully" });
}

module.exports = { secureUpload, createUplaod, createVariant };
