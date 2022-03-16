const fs = require("fs").promises;

const readSimpsons = async () => {
  const readFile = await fs.readFile("./simpsons.json", "utf-8");
  const parsedJson = await JSON.parse(readFile);
  parsedJson.forEach((character) => {
    console.log(
      `Character ID: ${character.id}, Character name: ${character.name}`
    );
  });
};

readSimpsons();
