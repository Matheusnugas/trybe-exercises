const fs = require("fs").promises;

const addNelson = async () => {
  const readFile = await fs.readFile("./simpsonsFamily.json", "utf-8");
  const parsedJson = await JSON.parse(readFile);
  parsedJson.push({ id: "5", name: "Nelson Muntz" });
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(parsedJson));
};

addNelson();
