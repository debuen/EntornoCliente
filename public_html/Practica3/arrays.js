
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
    if(numero == "*"){
        for (i=0;i<lista_numeros.length;i++){
            multi = multi * lista_numeros[i]; 
        }
        info.innerHTML =
    }
    else if(numero == "+"){
        for (i=0;i<lista_numeros.length;i++){
            suma = suma + lista_numeros[i]; 
        }
        
    }
    else if(numero == "/"){
        for (i=0;i<lista_numeros.length;i++){
            div = div / lista_numeros[i]; 
        }
        
    }
    else if(numero == "-"){
        for (i=0;i<lista_numeros.length;i++){
            resta = resta - lista_numeros[i]; 
        }
        
    }
    
}

