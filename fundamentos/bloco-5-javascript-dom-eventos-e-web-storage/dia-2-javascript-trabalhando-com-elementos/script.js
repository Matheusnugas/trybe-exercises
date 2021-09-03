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
mainContent.appendChild (thirdSection);

// Exercicio 7;

let leftImage = document.createElement ('img');
leftImage.src = "https://picsum.photos/200"
leftImage.class = 'small-image';
secondSection.appendChild (leftImage);

// Exercicio 8;

const arr = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];

for (let index in arr) {
    const unordList = document.createElement ('ul');
    let listItems = document.createElement ('li');
    listItems.innerHTML = arr[index];
    thirdSection.appendChild (unordList);
    unordList.appendChild (listItems);
}