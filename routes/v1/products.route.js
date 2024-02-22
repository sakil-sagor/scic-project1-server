const express = require("express");
const productsController = require("../../controllers/products.controller");

const router = express.Router();
// create single products
router
  .route("/create")
  .post(productsController.createProduct)
  .get(productsController.getallProduct);

// update product
router.route("/updateProduct/:_id").put(productsController.updateProduct);

// create brand
router
  .route("/createBrand")
  .post(productsController.createBrand)
  .get(productsController.getAllBrands);

// add to addToCart
router.route("/addToCart").post(productsController.addtoCart);

module.exports = router;
