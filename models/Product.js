const mongoose = require("mongoose");
const validator = require("validator");

const ProductSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https"],
            require_tld: true,
            require_protocol: true,
          }),

        message: "Invalid image URL",
      },
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    productRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
