const numbers = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof num3 !== "number"
    ) {
      reject(new Error("Somente números"));
    }
    const result = (num1 + num2) * num3;
    if (result < 50) return reject(new Error("Valor muito baixo"));
    resolve(result);
  });
  return promise;
};

const createRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

numbers(createRandomNumber(), createRandomNumber(), createRandomNumber())
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((err) => console.log(`erro: ${err.message}`));
