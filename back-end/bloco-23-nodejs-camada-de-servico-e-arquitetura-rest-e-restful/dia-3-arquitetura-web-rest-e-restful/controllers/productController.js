const express = require("express");
const ProductModel = require("../models/productModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await ProductModel.getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Something Wrong" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.getById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something Wrong" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, brand } = req.body;
    const newProduct = await ProductModel.add(name, brand);
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Something Wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductModel.exclude(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Something Wrong" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { name, brand } = req.body;
    const { id } = req.params;
    const products = await ProductModel.update(id, name, brand);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Something wrong" });
  }
});

module.exports = router;
