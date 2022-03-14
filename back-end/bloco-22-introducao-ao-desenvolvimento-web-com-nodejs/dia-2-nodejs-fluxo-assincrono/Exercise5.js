const fs = require("fs").promises;
const stringArray = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

const fileCreator = async () => {
  // Cria todos os arquivos usando as strings do Array stringArray
  const createFilePromises = stringArray.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );
  // Faz uma Promise com os arquivos criados
  await Promise.all(createFilePromises);
  // Junta todos os arquivos em um array
  const fileNames = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file4.txt",
    "file5.txt",
  ];
  // Faz uma Promise utilizando todos os arquivos criados
  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, "utf-8"))
  );
  // Une as strings contidas nos arquivos em uma frase
  const newFileContent = fileContents.join(" ");
  // Salva essa frase em um só arquivo.
  await fs.writeFile("./fileAll.txt", newFileContent);
};

fileCreator();
