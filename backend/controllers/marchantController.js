const Store = require("../models/marchantModel.js");
const User = require("../models/usersModel.js");

let becomeMerchant = async (req, res) => {
  const { storeName, officialEmail, officialPhone, adress, owner, product } =
    req.body;

  if (!storeName) {
    return res.send({ error: "Store name required" });
  } else if (!officialEmail) {
    return res.send({ error: "Email required" });
  } else if (!officialPhone) {
    return res.send({ error: "Phone required" });
  } else if (!adress) {
    return res.send({ error: "Adress required" });
  } else {
    let duplicateEmail =await Store.find({ officialEmail });
    if (duplicateEmail.length > 0) {
      return res.send({ error: "Email already exits, try another!" });
    }
    const store = new Store({
      storeName,
      officialEmail,
      officialPhone,
      adress,
      owner,
      product,
    });
    store.save();
    await User.findOneAndUpdate(
      { _id: owner },
      { $set: { merchant: true, role: "merchant" } },
      { new: true }
    );
    res.send({success:"Congrats! Store create."})
  }
};

module.exports = { becomeMerchant };
