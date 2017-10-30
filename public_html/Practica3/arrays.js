
var lista_numeros = new Array();
lista_numeros[0] = Math.floor((Math.random() * 10) + 1);
lista_numeros[1] = Math.floor((Math.random() * 10) + 1);
lista_numeros[2] = Math.floor((Math.random() * 10) + 1);
lista_numeros[3] = Math.floor((Math.random() * 10) + 1);
lista_numeros[4] = Math.floor((Math.random() * 10) + 1);


function mostrarArray(){
    var info = document.getElementById("infoArray");
    info.innerHTML = "";
    for(i=0;i<lista_numeros.length;i++){
        info.innerHTML += "<div class='col-xs-2 col-sm-2 col-md-2' style='border: 1px solid; text-align: center '>"+lista_numeros[i]+"</div>";
    }
}

function primerUltimo(){
    var primero = lista_numeros[0];
    var long = (lista_numeros.length) - 1;
    var ultimo = lista_numeros[long];
    var info = document.getElementById("info");
    info.innerHTML = "Primero: " + primero + " / Último: " + ultimo;
}

function addUltimo(){
    var numero = window.prompt("Numero: ");
    lista_numeros.push(numero);
    mostrarArray();
}

function addPrimero(){
    var numero = window.prompt("Numero: ");
    lista_numeros.unshift(numero);
    mostrarArray();
}

function borrarUltimo(){
    lista_numeros.pop();
    mostrarArray();
}

function borrarPrimero(){
    lista_numeros.shift();
    mostrarArray();
}

function calcular(){
    var numero = window.prompt("*, + , / , -");
    var suma = 0;
    var multi = 0;
    var div = 0;
    var resta = 0;
    if(numero == "*"){
        for (i=0;i<lista_numeros.length;i++){
            multi = multi * lista_numeros[i]; 
        }
        var info = document.getElementById("resultado");
        info.innerHTML = "El resultado del producto es: " + multi;
    }
    else if(numero == "+"){
        for (i=0;i<lista_numeros.length;i++){
            suma = suma + lista_numeros[i]; 
        }
        var info = document.getElementById("resultado");
        info.innerHTML = "El resultado de la suma es: " + suma;
    }
    else if(numero == "/"){
        for (i=0;i<lista_numeros.length;i++){
            div = div / lista_numeros[i]; 
        }
        var info = document.getElementById("resultado");
        info.innerHTML = "El resultado dela division es: " + div;
    }
    else if(numero == "-"){
        for (i=0;i<lista_numeros.length;i++){
            resta = resta - lista_numeros[i]; 
        }
        var info = document.getElementById("resultado");
        info.innerHTML = "El resultado de la resta es: " + resta;
    }
    
}

function borrarPosicion(){
    var numero = window.prompt("Posicion: ");
    lista_numeros.splice(numero, 1);
    mostrarArray();
}

function borrarNumero(){
    var numero = window.prompt("Numero a borrar: ");
    for(i=0;i<lista_numeros.length;){
        if(lista_numeros[i] == numero){
            lista_numeros.splice(i, 1);
        }else{
            i++;
        }
    }
    mostrarArray();
}

