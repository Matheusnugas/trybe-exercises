const { expect } = require("@jest/globals");

const uppercase = require('/Users/matheusnugas/Documents/trybe-exercises/fundamentos/bloco-9-javascript-e-testes-assincronos/dia-1-javascript-assincrono-e-callbacks/exercise7.js')

it('uppercase function works', (done) => {
    uppercase('test', (str) => {
        try {
            expect(str).toBe('TEST');
            done();
        } catch (error) {
            done(error)
        }
    });
});