
function ventanaCargada(){
    window.opener.ventanaNuevaCargada;
}

var refInterval;
function inciaContador(){
    refInterval = window.setInterval(aumentaContador, 1000);
}

var cont = 0;
function aumentaContador(){
    document.getElementById("contador").innerHTML = cont;
    cont++;
}

function detieneContador(){
    window.clearInterval(refInterval);
}