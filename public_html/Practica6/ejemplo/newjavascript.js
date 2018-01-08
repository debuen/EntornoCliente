/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var numero = 10;
console.log(isNaN(numero));

var key = setInterval( function(){
    console.log("hola");
}, 1000);

window.setTimeout(nombreFunction,6000);
function nombreFunction(){
     window.clearInterval(key);
}

var opened= window.open("ventanaNueva.html","_blank"
                            ,"toolbar=no,width=200,height=100");

window.setTimeout(function(){
    opened.document.getElementById("pop").innerHTML="PepeLu";
    opened.saludoVentanNueva();
},1000);

