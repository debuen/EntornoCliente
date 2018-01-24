
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
                                       

function getStucom(){
    window.open("http://www.stucom.com","Nombre","scrollbars=no");  
}

function start(){
    var w = (screen.availWidth/2) - 300;
    var h = (screen.availHeight/2) - 300;
    window.open("juego.html", "miWindow", "right="+w+", left="+w+", top="+h+", bottom="+h+", width=600, height=600");
}
        