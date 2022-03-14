const fs = require("fs").promises;

const nelsonToMaggie = async () => {
  const readFile = await fs.readFile("./simpsonsFamily.json", "utf-8");
  const parsedJson = await JSON.parse(readFile);
  const simpsonsWithoutNelson = parsedJson.filter(
    (character) => character.name !== "Nelson Muntz"
  );
  const simpsonsWithMaggie = [
    ...simpsonsWithoutNelson,
    { id: "5", Name: "Maggie Simpson" },
  ];
  await fs.writeFile(
    "./simpsonsFamily.json",
    JSON.stringify(simpsonsWithMaggie)
  );
};

nelsonToMaggie();
