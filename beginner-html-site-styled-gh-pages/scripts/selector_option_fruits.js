function changeSelector() {
    var select = document.getElementById('my_select').selectedIndex;
    var options = document.getElementById('my_select').options;
    alert('выбрана опция ' + options[select].text);
}

//навешиваем событие 
var btnForInp = document.getElementById('btn_input');
var select = document.getElementById('my_select');
my_select.addEventListener('change', changeSelector);

/* 
.selectedIndex показывает порядковый номер первого выбранного элемента <option>. 
Значение -1 означает, что ни один из элементов не выбран.
*/