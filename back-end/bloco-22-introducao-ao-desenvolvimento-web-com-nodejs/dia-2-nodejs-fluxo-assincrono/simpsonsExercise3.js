const fs = require("fs").promises;

const readSimpsons = async () => {
  const readFile = await fs.readFile("./simpsons.json", "utf-8");
  const parsedJson = await JSON.parse(readFile);
  const newArray = parsedJson.filter(
    (character) => character.id !== "10" && character.id !== "6"
  );
  await fs.writeFile("./simpsons.json", JSON.stringify(newArray));
};

readSimpsons();
