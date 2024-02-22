const mongoose = require("mongoose");
const validator = require("validator");

const BrandSchema = mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
    },

    image: {
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
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", BrandSchema);
module.exports = Brand;
