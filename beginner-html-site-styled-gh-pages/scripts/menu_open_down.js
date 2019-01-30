var menuElem = document.getElementById('sweeties');
    var titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };

    /* elem.classList.toggle("class") – если класса class нет, 
    добавляет его, если есть – удаляет. В данном случае применяется класс open, который
    прописан в css  _menu_open_down*/ 