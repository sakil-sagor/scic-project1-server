const Product = require("../models/Product");
const {
  createProductService,
  createBrandService,
  getAllBrandsService,
  getAllProductsDb,
} = require("../services/products.service");

exports.createProduct = async (req, res) => {
  try {
    const getLastProd = await Product.findOne().sort({ createdAt: -1 });
    const id = getLastProd?.productId;
    let productId;
    if (id) {
      productId = parseInt(id) + 1;
    } else {
      productId = 1001;
    }

    const productDetails = { ...req.body, productId };

    console.log(productDetails);
    const createdRoom = await createProductService(productDetails);
    res.status(200).json({
      status: "success",
      message: "Successfully Added product detials",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};
// create brands
exports.createBrand = async (req, res) => {
  try {
    console.log(req.body);
    const createdRoom = await createBrandService(req.body);
    console.log(createdRoom);
    res.status(200).json({
      status: "success",
      message: "Successfully Added product detials",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};
//all products
exports.getAllBrands = async (req, res) => {
  try {
    const getAllBrand = await getAllProductsDb();
    console.log(getAllBrand);
    res.status(200).json({
      status: "success",
      data: getAllBrand,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't find",
      error: error.message,
    });
  }
};
// get all products
exports.getallProduct = async (req, res) => {
  try {
    const getAllBrand = await getAllBrandsService();
    console.log(getAllBrand);
    res.status(200).json({
      status: "success",
      data: getAllBrand,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't find",
      error: error.message,
    });
  }
};
