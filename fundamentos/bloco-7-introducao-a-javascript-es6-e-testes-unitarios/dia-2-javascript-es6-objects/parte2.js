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

console.log(showObjectLength(lesson3))
