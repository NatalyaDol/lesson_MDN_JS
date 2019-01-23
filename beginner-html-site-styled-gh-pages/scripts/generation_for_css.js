function valueInpTypeRange() {
    var rtl=document.getElementById('rtl').value;
    var rtr=document.getElementById('rtr').value;
    var rbr=document.getElementById('rbr').value;
    var rbl=document.getElementById('rbl').value;
    var ttl=document.getElementById('ttl');
    var ttr=document.getElementById('ttr');
    var tbr=document.getElementById('tbr');
    var tbl=document.getElementById('tbl');
    
    var blockExample = document.getElementById('block_example');
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    blockExample.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
}


