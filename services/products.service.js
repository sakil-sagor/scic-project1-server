const { ObjectId } = require("mongodb");
const AddtoCartProduct = require("../models/AddtoCartProduct");
const Brand = require("../models/Brand");
const Product = require("../models/Product");
const { default: mongoose } = require("mongoose");

exports.createProductService = async (detials) => {
  const result = await Product.create(detials);
  console.log(result);
  return result;
};
// get all brands
exports.getAllProductsDb = async () => {
  const result = await Product.find({});
  return result;
};

exports.createBrandService = async (detials) => {
  const result = await Brand.create(detials);
  return result;
};
// get all brands
exports.getAllBrandsService = async () => {
  const result = await Brand.find({});
  return result;
};

// update products
exports.putUpdateProductinDb = async (productId, details) => {
  const result = await Product.updateOne({ _id: productId }, { $set: details });
  return result;
};

// add to cart
exports.addtoCartDb = async (detials) => {
  const result = await AddtoCartProduct.create(detials);
  return result;
};
// find Cart for signle email
exports.singleCartEmailDb = async (id) => {
  const result = await Product.findOne({ _id: id });
  return result;
};
