function Caracol(){
    this.nombre;
    this.puntos;
    this.velocidad;
    this.distancia;
}
var c1 = new Caracol();
var c2 = new Caracol();
var c3 = new Caracol();
var c4 = new Caracol();
c1 = { "nombre": "Speed Cargol", "puntos" : 0, "velocidad": 10, "distancia":0};
c2 = { "nombre": "Cargolet", "puntos" : 0, "velocidad": 10, "distancia":0};
c3 = { "nombre": "Slow Cargol", "puntos" : 0, "velocidad": 10, "distancia":0};
c4 = { "nombre": "Gran Cargol", "puntos" : 0, "velocidad": 10, "distancia":0};
var caracoles = [c1, c2, c3, c4];

function SprintIndividual(){
    this.nombre;
    this.total;
    this.sprint;
}

var Sprint = [SprintIndividual, SprintIndividual, SprintIndividual, SprintIndividual];
var Sprints = [];

var contador = 0;

function run(){
    contador++;
    var numSprint = document.getElementById("numSprint");
    numSprint.innerHTML = "<p>SPRINT " + contador + "</p>";
    
    for (var i=0;i<caracoles.length;i++){
        
        var sprint1 = Math.floor(Math.random() * caracoles[i].velocidad) + 1;
        var sprint2 = Math.floor(Math.random() * caracoles[i].velocidad) + 1;
        var sprint3 = Math.floor(Math.random() * caracoles[i].velocidad) + 1;
        var sprint4 = Math.floor(Math.random() * caracoles[i].velocidad) + 1;
        caracoles[i].distancia = caracoles[i].distancia + sprint1;   
    }
    
    caracoles.sort(function (a, b){return (b.distancia - a.distancia)});
    
    for (var i=0;i<caracoles.length;i++){
        
        if(i==0){
            Sprint[0].nombre = caracoles[0].nombre;
            Sprint[0].sprint = sprint1;
            Sprint[0].total = caracoles[0].distancia;
            var infoSprint1 = document.getElementById("infoSprint1");
            infoSprint1.innerHTML = "<div class='col-xs-12 col-sm-6 col-md-6' style='background-color: #cccc00 '>" + "1. " + caracoles[0].nombre + " / " + "Total: " + caracoles[i].distancia + " / " + "Sprint: " + sprint1 + "</div>";                                     
        }else if(i==1){
            Sprint[1].nombre = caracoles[1].nombre;
            Sprint[1].sprint = sprint2;
            Sprint[1].total = caracoles[1].distancia;
            var infoSprint2 = document.getElementById("infoSprint2");
            infoSprint2.innerHTML = "<div class='col-xs-12 col-sm-6 col-md-6' style='background-color: #cccc00 '>" + "2. " + caracoles[1].nombre + " / " + "Total: " + caracoles[i].distancia + " / " + "Sprint: " + sprint2 + "</div>";                     
        }else if(i==2){
            Sprint[2].nombre = caracoles[2].nombre;
            Sprint[2].sprint = sprint3;
            Sprint[2].total = caracoles[2].distancia;
            var infoSprint3 = document.getElementById("infoSprint3");
            infoSprint3.innerHTML = "<div class='col-xs-12 col-sm-6 col-md-6' style='background-color: #cccc00 '>" + "3. " + caracoles[2].nombre + " / " + "Total: " + caracoles[i].distancia + " / " + "Sprint: " + sprint3 + "</div>";                                     
        }else if(i==3){
            Sprint[3].nombre = caracoles[3].nombre;
            Sprint[3].sprint = sprint4;
            Sprint[3].total = caracoles[3].distancia;
            var infoSprint4 = document.getElementById("infoSprint4");
            infoSprint4.innerHTML = "<div class='col-xs-12 col-sm-6 col-md-6' style='background-color: #cccc00 '>" + "4. " + caracoles[3].nombre + " / " + "Total: " + caracoles[i].distancia + " / " + "Sprint: " + sprint4 + "</div>";                     
        }
    }

    Sprints.push(Sprint);
    var num = 0;
    
    for (var i=0;i<Sprints.length;i++){
        num++;
        for (var i=0;i<Sprint.length;i++){
            var info = document.getElementById("info");
            info.innerHTML =+ "<div class='col-xs-12 col-md-12' style='background-color: #666600'>SPRINT"+ num +"</div>"+
                    "<div class='col-xs-12 col-md-12' style='background-color: #666600'>1. " + Sprint[i].nombre + "</div>"+
                    "<div class='col-xs-12 col-md-12' style='background-color: #666600'>2. " + Sprint[i].nombre + "</div>"+
                    "<div class='col-xs-12 col-md-12' style='background-color: #666600'>3. " + Sprint[i].nombre + "</div>"+
                    "<div class='col-xs-12 col-md-12' style='background-color: #666600'>4. " + Sprint[i].nombre + "</div>";
        }
    }
 
}

function finalizar(){
    
    caracoles.sort(function (a, b){return (b.total - a.total)});
    for (var i=0;i<caracoles.length;i++){
        if(i==0){
            caracoles[i].puntos = caracoles[i].puntos + 3;
            caracoles[i].velocidad = caracoles[i].velocidad + 3;
        }else if(i==1){
            caracoles[i].puntos = caracoles[i].puntos + 2;
            caracoles[i].velocidad = caracoles[i].velocidad + 2;
        }else if(i==2){
            caracoles[i].puntos = caracoles[i].puntos + 1;
            caracoles[i].velocidad = caracoles[i].velocidad + 1;
        }else if(i==3){
            caracoles[i].puntos = caracoles[i].puntos - 1;
            caracoles[i].velocidad = caracoles[i].velocidad - 1;
        }
    }
    
    caracoles.sort(function (a, b){return (b.puntos - a.puntos)});
    for (var i=0;i<caracoles.length;i++){
        if(i==0){
            var infoClasificacion1 = document.getElementById("infoClasificacion1");
            infoClasificacion1.innerHTML = "<div class='col-xs-12 col-sm-6' style='background-color: #cccc00 '>"+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + "</div>";
        }else if(i==1){
            var infoClasificacion2 = document.getElementById("infoClasificacion2");
            infoClasificacion2.innerHTML = "<div class='col-xs-12 col-sm-6' style='background-color: #cccc00 '>"+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + "</div>";
        }else if(i==2){
            var infoClasificacion3 = document.getElementById("infoClasificacion3");
            infoClasificacion3.innerHTML = "<div class='col-xs-12 col-sm-6' style='background-color: #cccc00 '>"+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + "</div>";
        }else if(i==3){
            var infoClasificacion4 = document.getElementById("infoClasificacion4");
            infoClasificacion4.innerHTML = "<div class='col-xs-12 col-sm-6' style='background-color: #cccc00 '>"+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + "</div>";
        }
    }
}