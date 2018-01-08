//Valor maximo
document.getElementById("max").innerHTML = Number.MAX_VALUE;
//Valor minimo
document.getElementById("min").innerHTML = Number.MIN_VALUE;
//Altura pantalla
document.getElementById("altura").innerHTML = screen.height;
//Anchura pantalla
document.getElementById("ancho").innerHTML = screen.width;
//Altura Web
document.getElementById("webHeight").innerHTML = window.innerHeight;
//Anchura Web
document.getElementById("webWidth").innerHTML = window.innerWidth;
//URL
document.getElementById("url").innerHTML = location.href;
//Web con extension
document.getElementById("index").innerHTML = location.pathname;
//Numero Random
document.getElementById("random").innerHTML = Math.floor((Math.random() * 200) + 0);
//Sistema Operativo
document.getElementById("SO").innerHTML = navigator.appName;