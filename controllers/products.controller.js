const { createProduct } = require("../services/products.service");

exports.createProduct = async (req, res) => {
  try {
    // console.log(req.body);
    const createdRoom = await createProduct(req.body);
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
