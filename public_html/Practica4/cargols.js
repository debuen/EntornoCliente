function Caracol(){
    this.nombre;
    this.puntos = 0;
    this.velocidad = 10;
    this.distancia = 0;
}

var caracol = new Caracol();

var caracoles = [caracol, caracol, caracol, caracol];

function run(){
    
    for (var i=0;i<caracoles.length;i++){
        
        var sprint = Math.floor(Math.random() * caracoles[i].velocidad) + 1;
        var total = caracoles[i].distancia + sprint;
        var infoSprint = document.getElementById("infoSprint");
        infoSprint.innerHTML = "<div class='col-xs-12 col-sm-6' style='background-color: #cccc00 '>" + "1. " + caracoles[i].nombre + " / " + "Total: " + total + " / " + "Sprint: " + sprint + "</div>";                                     
  
    }
    
    
    
                
    var total1 = caracol1.distancia + sprint1;
    var total2 = caracol2.distancia + sprint2;
    var total3 = caracol3.distancia + sprint3;
    var total4 = caracol4.distancia + sprint4;
    
    var info1 = document.getElementById("info1");
    info1.innerHTML = "<div>Total: "+ total1 + " / Sprint: "+ sprint1 +"</div>";

    var sprint = [total1, total2, total3, total4];
    sprint.sort(function(a, b){return a-b});
    
    var infoSprint = document.getElementById("infoSprint");
    infoSprint.innerHTML = "<div class='col-xs-12 col-sm-6' style='background-color: #cccc00 '>" +  + "</div>";
    
    var sprints = [sprint];
    
}