// Exercicio 1
let title = document.createElement ('h1');
title.innerText = "Exercício 5.2 - Javascript DOM";
document.body.appendChild (title)

// Exercicio 2;

let mainContent = document.createElement ('main');
mainContent.class = "main-content";
document.body.appendChild (mainContent);

// Exercicio 3;

let firstSection = document.createElement ("section");
firstSection.class = "center-content";
mainContent.appendChild (firstSection);

// Exercicio 4;

let mainParagraph = document.createElement ('p');
mainParagraph.innerText = "Lorem Ipsum rocks your socks";
firstSection.appendChild (mainParagraph);

// Exercicio 5;

let secondSection = document.createElement ('section');
secondSection.class = 'left-content';
mainContent.appendChild (secondSection);

// Exercicio 6;

let thirdSection = document.createElement ('section');
thirdSection.class = 'right-content';
mainContent.appendChild (thirdSection)