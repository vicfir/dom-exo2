let myBody = document.getElementsByTagName("body")[0];

let first = myBody.firstElementChild;
console.log(first);

let last = myBody.lastElementChild;
console.log(last);

let exo4 = myBody.children.item(2).childNodes;
console.log(exo4);

let liste = document.getElementsByTagName("li");
let firstLi = liste[0];
console.log(firstLi.nextElementSibling);

let secondLi = liste[1];
console.log(secondLi.previousElementSibling);