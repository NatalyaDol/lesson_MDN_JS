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
