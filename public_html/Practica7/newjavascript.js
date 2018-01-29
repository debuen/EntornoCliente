function cargar(){
document.getElementById("infoPantalla").innerHTML = "<li>Height without taskbar: "+ screen.availHeight + "</li>"+ 
                                                    "<li>Width without taskbar: "+ screen.availWidth + "</li>" +
                                                    "<li>Total height: "+ screen.height + "</li>" +
                                                    "<li>Total width: "+ screen.width + "</li>" +
                                                    "<li>Color resolution: "+ screen.pixelDepth + "</li>" +
                                                    "<li>Bit Depth: "+ screen.colorDepth + "</li>";

document.getElementById("infoNavegador").innerHTML = "<li>Code name: "+ navigator.appCodeName + "</li>"+ 
                                                    "<li>Name browser: "+ navigator.appName + "</li>" +
                                                    "<li>Version: "+ navigator.appVersion + "</li>" +
                                                    "<li>Cookies: "+ navigator.cookieEnabled + "</li>" +
                                                    "<li>Online: "+ navigator.onLine + "</li>" +
                                                    "<li>Platform: "+ navigator.platform + "</li>" +
                                                    "<li>Engine name: "+ navigator.product + "</li>" +
                                                    "<li>User agent: "+ navigator.userAgent + "</li>" +
                                                    "<li>Language: "+ navigator.language + "</li>" +
                                                    "<li id='geolocation'> </li>";

//geolocation
var geolocation = document.getElementById("geolocation");
function showPosition(position) {
    geolocation.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
navigator.geolocation.getCurrentPosition(showPosition);


document.getElementById("infoURL").innerHTML = "<li>Host: "+ location.host + "</li>"+ 
                                               "<li><button onclick='getStucom()'>STUCOM</button></li>";

}
                               

function getStucom(){
    window.open("http://www.stucom.com","Nombre","scrollbars=no");  
}

function start(){
    var w = (screen.availWidth/2) - 300;
    var h = (screen.availHeight/2) - 300;
    window.open("juego.html", "miWindow", "right="+w+", left="+w+", top="+h+", bottom="+h+", width=600, height=600");
}
       
var preguntas = ["1. Cual es el rio mas largo del mundo?", "2. Que seleccion gano el mundial de 2010?", "3. Quien es el presidente de Estados Unidos?"];
var respuestas = [["A - Nilo", "B - Amazonas", "C - Manzanares", "D - Danubio"],
                ["A - Alemania", "B - Holanda", "C - España", "D - Portugal"],
                ["A - Trump", "B - Bush", "C - Rajoy", "D - Obama"]];
            
var contador = 0;

function showQuestionsAnswer(){
    document.getElementById("pregunta").innerHTML = preguntas[contador];
    document.getElementById("respuesta1").innerHTML = respuestas[contador][0];
    document.getElementById("respuesta2").innerHTML = respuestas[contador][1];
    document.getElementById("respuesta3").innerHTML = respuestas[contador][2];
    document.getElementById("respuesta4").innerHTML = respuestas[contador][3];
    contador = contador + 1;
}

var correct = false;

function checkAnswer1(){
    if(contador == 3){
        correct = true;
        setTimeout(function(){alert("Correcto");},1000);
    }else{
        correct = false;
        setTimeout(function(){alert("Incorrecto");},2000);
    }
    showQuestionsAnswer();
}

function checkAnswer2(){
    console.log(contador);
    if(contador == 1){
        correct = true;
        setTimeout(function(){alert("Correcto");},2000);
    }else{
        correct = false;
        setTimeout(function(){alert("Incorrecto");},2000);
    }
    showQuestionsAnswer();
}

function checkAnswer3(){
    if(contador == 2){
        correct = true;
        setTimeout(function(){alert("Correcto");},2000);
    }else{
        correct = false;
        setTimeout(function(){alert("Incorrecto");},2000);
    }
    showQuestionsAnswer();
}

function checkAnswer4(){    
    correct = false;
    setTimeout(function(){alert("Incorrecto");},2000);
    showQuestionsAnswer();
}