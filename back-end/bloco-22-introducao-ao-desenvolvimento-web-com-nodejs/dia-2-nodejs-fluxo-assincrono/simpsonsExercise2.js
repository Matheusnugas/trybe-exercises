const fs = require("fs").promises;

const findSimpson = async (charId) => {
  const readFile = await fs.readFile("./simpsons.json", "utf-8");
  const parsedJson = await JSON.parse(readFile);
  const promise = new Promise((resolve, reject) => {
    if (
      parsedJson.find(
        (character) => character.id === JSON.stringify(charId)
      ) === undefined
    ) {
      reject(new Error("Tente usando id de 1 a 10"));
    }
    const result = parsedJson.find(
      (character) => character.id === JSON.stringify(charId)
    );
    resolve(
      `ID do Personagem: ${result.id} - Nome do personagem: ${result.name}`
    );
  });
  return promise;
};

findSimpson(5)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((err) => console.log(`erro: ${err.message}`));
