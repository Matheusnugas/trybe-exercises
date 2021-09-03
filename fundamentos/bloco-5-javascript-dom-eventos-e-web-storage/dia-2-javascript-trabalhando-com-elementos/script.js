// Exercicio 1
let title = document.createElement ('h1');
title.innerText = "Exercício 5.2 - Javascript DOM";
title.class = "title"
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
thirdSection.style.marginRight = 'auto'
mainContent.appendChild (thirdSection);

// Exercicio 7;

let leftImage = document.createElement ('img');
leftImage.src = "https://picsum.photos/200"
leftImage.class = 'small-image';
secondSection.appendChild (leftImage);

// Exercicio 8;

const arr = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];

const unordList = document.createElement ('ul');
thirdSection.appendChild (unordList);

for (let index in arr) {
    const listItems = document.createElement ('li');
    listItems.innerHTML = arr[index];
    unordList.appendChild (listItems);
}

// Exercicio 9;

for (let i = 0; i < 3; i += 1) {
    let subSubTitle = document.createElement ('h3');
    subSubTitle.innerText = `Olá ${i}`
    subSubTitle.class = "description"
    mainContent.appendChild (subSubTitle)
}

// PARTE 2

mainContent.removeChild (secondSection)
mainContent.style.backgroundColor = "green"

unordList.lastChild.remove()
unordList.lastChild.remove()
