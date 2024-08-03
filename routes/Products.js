const express = require("express");
const router = express.Router();
const Product = require("../models/Product/Product");

// Create a new product
router.post("/products", async (req, res) => {
  try {
    const { pro_name, pro_price, pro_selPrice, pro_info, t_id, pro_image } =
      req.body;
    const newProduct = new Product({
      pro_name,
      pro_price,
      pro_selPrice,
      pro_info,
      t_id,
      pro_image,
    });
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(400).send({ message: "Error creating product", error });
  }
});

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find().populate("t_id");
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: "Error fetching products", error });
  }
});

// Get products by trainer ID
router.get("/products/trainer/:t_id", async (req, res) => {
  try {
    const products = await Product.find({ t_id: req.params.t_id }).populate(
      "t_id"
    );
    res.status(200).send(products);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching products by trainer ID", error });
  }
});

module.exports = router;
