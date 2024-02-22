const Product = require("../models/Product");
const Rooms = require("../models/Products");

exports.createProduct = async (detials) => {
  const result = await Product.create(detials);
  return result;
};
