const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

const fetching = async () => {
  const data = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json)"
  );
  return data.data.bpi;
};

const btc = fetching();

const authMiddleWare = (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  const token = "1234567890a2";
  if (!tokenHeader || tokenHeader !== token || token.length !== 12) {
    return res.status(401).json({ message: "Token is not correct!" });
  }
  next();
};

app.get("/btc/price", authMiddleWare, async (req, res) => {
  res.status(200).json(await btc);
});

app.listen(3005, () => {
  console.log("Aplicação ouvindo na porta 3005");
});
