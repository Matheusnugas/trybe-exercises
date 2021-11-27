const service = require('./service');
const service2 = require('./service2');
jest.mock('./service2');

describe('testa a funcao randomNum', ()=> {
    it('se randomNum é uma função', () => {
        expect(service.randomNum).toBeInstanceOf(Function)
    })
    it('se randomNum retorna um número', () => {
        const result = service.randomNum();
        expect(typeof result).toBe('number')
    })
})

describe('testa mocks da funcao randomNum', () => {
    it('testa se a funcao foi chamada', () => {
        service.randomNum = jest.fn()
        service.randomNum();
        expect(service.randomNum).toHaveBeenCalled();
    })

    it('testa quantas vezes randomNum foi chamada', () => {
        service.randomNum = jest.fn();
        service.randomNum();
        expect(service.randomNum).toHaveBeenCalledTimes(1);
    })

    it('testa o retorno da funcao randomNum', () => {
        service.randomNum = jest.fn().mockReturnValue(10);
        expect(service.randomNum()).toBe(10);
    })

    it('testa se a funcao randomNum foi mockada com uma divisão, quantas vezes foi chamada e como foi chamada', () => {
        service.randomNum = jest.fn().mockImplementationOnce((a, b) => a / b);

        expect(service.randomNum(20, 4)).toBe(5);
        expect(service.randomNum).toHaveBeenCalled();
        expect(service.randomNum).toHaveBeenCalledTimes(1);
        expect(service.randomNum).toHaveBeenCalledWith(20, 4);
    })

    it('testa se a funcao randomNum foi mockada com uma multiplicacao, quantas vezes foi chamada e como foi chamada', () => {
        service.randomNum = jest.fn().mockImplementation((a, b, c) => a * b * c);
        expect(service.randomNum(5, 3, 2)).toBe(30);
        expect(service.randomNum).toHaveBeenCalled();
        expect(service.randomNum).toHaveBeenCalledTimes(1);
        expect(service.randomNum).toHaveBeenCalledWith(5, 3, 2);
    })

    it('testa se a funcao randomNUm foi mockada para receber um parametro e retornar o seu dobro, quantas vezes foi chamada, e se foi chamada', () => {
        service.randomNum.mockReset();
        service.randomNum = jest.fn().mockImplementation((a) => a * 2);
        expect(service.randomNum(5)).toBe(10);
        expect(service.randomNum).toHaveBeenCalled();
        expect(service.randomNum).toHaveBeenCalledTimes(1);
        expect(service.randomNum).toHaveBeenCalledWith(5);
    })
})

describe('testa as funcoes de service2', () => {
    test('testa o mock da primeira função de service2', () => {
        service2.upperCaseStr = jest.fn().mockImplementation((str) => str.toLowerCase());
        expect(service2.upperCaseStr("TRYBE")).toBe('trybe');
        expect(service2.upperCaseStr).toHaveBeenCalled();
        expect(service2.upperCaseStr).toHaveBeenCalledTimes(1);
        expect(service2.upperCaseStr).toHaveBeenCalledWith("TRYBE");

        // service2.upperCaseStr.mockRestore();

        // expect(service2.upperCaseStr('trybe')).toBe('TRYBE');
    })
    
    it('testa o mock da segunda funcao de service2', () => {
        service2.firstCharacter = jest.fn().mockImplementation((str) => str.charAt(str.length -1));
        expect(service2.firstCharacter("TRYBE")).toBe('E');
        expect(service2.firstCharacter).toHaveBeenCalled();
        expect(service2.firstCharacter).toHaveBeenCalledTimes(1);
        expect(service2.firstCharacter).toHaveBeenCalledWith('TRYBE')
    })

    it('testa o mock da terceira funcao de service2', () => {
        service2.concatenate = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2).concat(str3));
        expect(service2.concatenate('EU', 'SOU', 'TRYBER')).toBe('EUSOUTRYBER');
        expect(service2.concatenate).toHaveBeenCalled();
        expect(service2.concatenate).toHaveBeenCalledTimes(1);
        expect(service2.concatenate).toHaveBeenCalledWith('EU', 'SOU', 'TRYBER')
    })
})