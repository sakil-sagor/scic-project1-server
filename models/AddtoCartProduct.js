const mongoose = require("mongoose");

const AddtoCartProductSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AddtoCartProduct = mongoose.model(
  "AddtoCartProduct",
  AddtoCartProductSchema
);
module.exports = AddtoCartProduct;
