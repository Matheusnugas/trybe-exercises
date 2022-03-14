const numbers = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
    ) {
      throw new Error("Informe apenas números");
    }
    const result = (num1 + num2) * num3;
    resolve(result);
  });
  return promise;
};

numbers(3, 1, 2)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((err) => console.log(`erro: ${err.message}`));
