function changeInpType() {
    var radio = document.getElementsByName('about_user');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            alert('Выбран ' + i + ' элемент');
        }
    }
}


//Навешиваем событие
var btnForInp = document.getElementById('btn_input');
btn_input.addEventListener('click', changeInpType);

