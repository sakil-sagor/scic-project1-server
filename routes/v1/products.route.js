const express = require("express");
const productsController = require("../../controllers/products.controller");

const router = express.Router();
// create single products
router.route("/create").post(productsController.createProduct);

// create brand
router
  .route("/createBrand")
  .post(productsController.createBrand)
  .get(productsController.getAllBrands);

module.exports = router;
