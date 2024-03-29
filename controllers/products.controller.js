const { default: mongoose } = require("mongoose");
const AddtoCartProduct = require("../models/AddtoCartProduct");
const Product = require("../models/Product");
const {
  createProductService,
  createBrandService,
  getAllBrandsService,
  getAllProductsDb,
  putUpdateProductinDb,
  addtoCartDb,
  singleCartEmailDb,
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
//all brands
exports.getAllBrands = async (req, res) => {
  try {
    const getAllBrand = await getAllBrandsService();
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
    const getAllBrand = await getAllProductsDb();
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

// update  product
exports.updateProduct = async (req, res) => {
  try {
    const { _id } = req.params;

    const allProduct = await putUpdateProductinDb(_id, req.body);
    res.status(200).json({
      status: "success",
      data: allProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the Products",
    });
  }
};

// create add to cart products
exports.addtoCart = async (req, res) => {
  try {
    const useremail = req.body.email;
    const productId = req.body.id;

    const resulttt = await AddtoCartProduct.find({
      email: useremail,
      id: productId,
    });

    if (resulttt.length === 0) {
      const createdAddtoCart = await addtoCartDb(req.body);
      res.status(200).json({
        status: "success",
        message: "Successfully Added product in Cart",
      });
    } else {
      res.status(500).json({
        status: "fail",
        message: "Couldn't create Cart",
        error: error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create Cart",
      error: error.message,
    });
  }
};

// find cart for single email

exports.singleCartEmail = async (req, res) => {
  try {
    const { email } = req.query;

    const results = await AddtoCartProduct.find({
      email: email,
    }).select({ id: 1, _id: 0 });

    // console.log(results);
    let productsList = [];
    for (let product of results) {
      const allCart = await singleCartEmailDb(product?.id);
      productsList.push(allCart);
    }

    res.status(200).json({
      status: "success",
      data: productsList,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't find",
      error: error.message,
    });
  }
};
