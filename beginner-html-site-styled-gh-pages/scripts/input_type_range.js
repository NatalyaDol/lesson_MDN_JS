function valueInpTypeRange() {
    var rng = document.getElementById('inp_type_range');
    var p = document.getElementById('inp_type_range_valuy_p');
    p.innerHTML = rng.value;
}
//Навешиваем событие
var a = document.getElementById('inp_type_range');
a.addEventListener('input', valueInpTypeRange);