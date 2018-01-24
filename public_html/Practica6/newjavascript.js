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
var url = location.pathname;
var barra = url.lastIndexOf("/");
var nombre = url.substr(barra+1);
document.getElementById("index").innerHTML = nombre;
//Numero Random
document.getElementById("random").innerHTML = Math.floor((Math.random() * 200) + 0);
//Sistema Operativo
document.getElementById("SO").innerHTML = navigator.appName;

function checkNombre(){
    document.cookie= "nombre_usuario = pepe";
    document.cookie= "edad = 15";
    console.log(document.cookie);
    
    if(document.cookie) === ""){
        var nombre = window.prompt("introduce nombre");
        
    }
}

function pideValores(){
    do{
        var valores = window.prompt("introduce dos valores separados por comas");
        valores = valores.split(",");
        var error = false;
        if(valores.length != 2){
            error = true;
        }
        if(valores[0] < 200 || valores[0] > 800 ||valores[1] < 200 || valores[1] > 800)
    }while (error);
}

var ancho = Math.floor((Math.random() * valores[1] + valores[0]));
var alto = Math.floor((Math.random() * valores[1] + valores[0]));
window.open("ventana.html", "__", "width=" + ancho +",height=" + alto);

function ventanaNuevaCargada(){
    document.getElementById("ventanaNueva").innerHTML = "Nueva ventana cargada";
}
