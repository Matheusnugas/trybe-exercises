const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 1 -  Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. 

let addNightShift = (object, value = 'noite', chave = 'turno',) => {
    object[chave] = value;
    return object;
}
// 2 -Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. 

let listObjectKeys = object => Object.keys(object);

// 3 - Crie uma função para mostrar o tamanho de um objeto. 

let showObjectLength = object => Object.keys(object).length;

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

let showObjectValues = object => Object.values(object);

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});


// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

let studentTotal = object => {
    return object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes;
}

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
let showObjectValueIndex = (object, index) => Object.values(object)[index];

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

let verifyPair = (object, key, value) => {
    let array = Object.entries(object);
    let equality = 0
    for (let i = 0; i < array.length; i+=1) {
        if (array[i][0] == key && array[i][1] == value) {
           equality = true;
        } else {
           equality = false;
        }
    }
    return equality;
}






