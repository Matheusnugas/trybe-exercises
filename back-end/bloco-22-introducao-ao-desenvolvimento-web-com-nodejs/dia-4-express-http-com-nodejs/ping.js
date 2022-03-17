const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (age >= 17) {
    res.status(200).json({ message: `Hello, ${name}` });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .json({ message: `You are ${name} and you are ${age} years old` });
});

app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000");
});
