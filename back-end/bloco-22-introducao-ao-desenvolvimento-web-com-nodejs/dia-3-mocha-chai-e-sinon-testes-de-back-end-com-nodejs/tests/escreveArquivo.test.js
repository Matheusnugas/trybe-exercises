const { expect } = require("chai");
const fs = require("fs");
const sinon = require("sinon");

const escreveArquivo = require("../escreveArquivo");

describe("Cria um arquivo", () => {
  before(() => {
    sinon.stub(fs, "writeFileSync");
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  it("Escreve um arquivo", () => {
    const answer = escreveArquivo("arquivo.txt", "conteudo");
    expect(answer).to.be.a("string");
  });
  it("retorna ok", () => {
    const answer = escreveArquivo("arquivo.txt", "conteudo");
    expect(answer).to.be.equals("ok");
  });
});
