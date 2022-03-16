const fs = require("fs").promises;

const createSimpsons = async () => {
  const readFile = await fs.readFile("./simpsons.json", "utf-8");
  const parsedJson = await JSON.parse(readFile);
  const newArray = parsedJson.filter(
    (character) => character.id >= 1 && character.id <= 4
  );
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(newArray));
};

createSimpsons();
