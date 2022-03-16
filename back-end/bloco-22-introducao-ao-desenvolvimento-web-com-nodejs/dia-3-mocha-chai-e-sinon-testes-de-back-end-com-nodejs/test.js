const { expect } = require("chai");
const testNumber = require("./testNumber");

describe("teste um número", () => {
  it("testa se um número é positivo", () => {
    const result = testNumber(1);
    expect(result).to.be.equals("positive");
  });
  it("testa se um número é negativo", () => {
    const result = testNumber(-1);
    expect(result).to.be.equals("negative");
  });
  it("testa se um número é negativo", () => {
    const result = testNumber(0);
    expect(result).to.be.equals("neutral");
  });
  it("testa se o parâmetro é um número", () => {
    const result = testNumber("n");
    expect(result).to.be.equals("Only numbers allowed");
  });
});
