// текст в Н1 изменится с помощью этого кода 
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


/////////////////////////////

//  2 Cмена картинки при клике на картинку

//getAttribute() возвращает значение указанного атрибута элемента. 
//Если элемент не содержит данный атрибут, могут быть возвращены null 
//или "" (пустая строка); подробнее Notes.


//setAttribute
//Добавляет новый атрибут или изменяет значение существующего атрибута у выбранного элемента.
//element.setAttribute(name, value);
//name - имя атрибута (строка).
//value  - значение атрибута.


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
        myImage.setAttribute ('src','images/firefox-icon.png')
    }
}

//////////////////////////////////
// 3 Добавление персонального приветствия

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


//Теперь добавьте следующую функцию для установки персонализированного приветствия
// - она ничего не будет делать, но мы будем использовать её позже:
// она функция содержит prompt диалоговое окно
//ПОЯСНЕНИЕ ПО ССЫЛКЕ
//https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics
function setUserName () {
    var myName = prompt('Please enter your name. ');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML  = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}