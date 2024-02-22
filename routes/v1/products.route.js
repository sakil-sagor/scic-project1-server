const express = require("express");
const productsController = require("../../controllers/products.controller");

const router = express.Router();
// create single products
router.route("/create").post(productsController.createProduct);

module.exports = router;
