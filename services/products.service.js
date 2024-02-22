const Brand = require("../models/Brand");
const Product = require("../models/Product");

exports.createProductService = async (detials) => {
  const result = await Product.create(detials);
  console.log(result);
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
