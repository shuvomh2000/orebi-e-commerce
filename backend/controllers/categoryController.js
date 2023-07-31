const Category = require("../models/categoryModel.js");
const SubCategory = require("../models/subCategoryModel.js");

// create Category Controller
let createCategoryController = async (req, res) => {
  const { name } = req.body;
  let duplicateCategory = await Category.find({ name });
  if (duplicateCategory.length > 0) {
    return res.send({ error: "Category already exits!" });
  }

  let category = new Category({
    name,
  });
  category.save();
  res.send({ success: "Category create successfully!" });
};

// category Status Controller
let categoryStatusController = async (req, res) => {
  const { name, status } = req.body;
  console.log(name, status);
  if (status == "rejected" || status == "waiting") {
    let updateCategory = await Category.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status } },
      { new: true }
    );
    return res.send({ success: "Category Status updated!" });
  } else if (status == "approved") {
    let updateCategory = await Category.findOneAndUpdate(
      { name },
      { $set: { isActive: true, status } },
      { new: true }
    );
    return res.send({ success: "Category Status updated!" });
  }
};
// sub create Category Controller
let createSubCategoryController = async (req, res) => {
  const { name, categoryId } = req.body;
  let duplicateSubCategory = await SubCategory.find({ name });
  if (duplicateSubCategory.length > 0) {
    return res.send({ error: "Sub Category already exits!" });
  }

  let subCategory = new SubCategory({
    name,
    categoryId,
  });
  subCategory.save();
  console.log(subCategory);

  await Category.findOneAndUpdate(
    { _id: subCategory.categoryId },
    { $push: { subCategory: subCategory._id } },
    { new: true }
  );
  res.send({ success: "Sub Category create successfully!" });
};

// sub category Status Controller
let subCategoryStatusController = async (req, res) => {
  const { name,status,categoryId } = req.body;
  if(status == "rejected" || status == "waiting"){
    let updateSubCategory =await SubCategory.findOneAndUpdate({name},{$set:{isActive:false,status}},{new:true})
    return res.send({ success: "sub Category Status updated!" });
  }else if(status == "approved"){
    let updateSubCategory =await SubCategory.findOneAndUpdate({name},{$set:{isActive:true,status}},{new:true})
    return res.send({ success: "sub Category Status updated!" });
  }
};

// get all category
async function getAllCategory(req,res){
   let data = await Category.find({}).populate("subCategory")
  res.send(data)
}

// get all sub category
async function getAllSubCategory(req,res){
   let data = await SubCategory.find({}).populate("category")
  res.send(data)
}

module.exports = {
  createCategoryController,
  categoryStatusController,
  createSubCategoryController,
  subCategoryStatusController,
  getAllCategory,
  getAllSubCategory
};
