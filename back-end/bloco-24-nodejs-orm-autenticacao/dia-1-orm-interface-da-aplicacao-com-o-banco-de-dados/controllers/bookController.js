const express = require("express");
const { Book } = require("../models");
const router = express.Router();

// Esse endpoint usa o metodo findAll do Sequelize para buscar todos os livros
router.get("/", async (req, res) => {
  try {
    const allBooks = await Book.findAll();
    return res.status(200).json(allBooks);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "No fucking books" });
  }
});

// Este endpoint usa o método findByPk do Sequelize para buscar um livro pelo id.
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/book", async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/book/:id", async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } = req.params;
    const updatedBook = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );
    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
