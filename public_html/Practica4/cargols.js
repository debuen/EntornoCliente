function Caracol(){
    this.nombre;
    this.puntos;
    this.velocidad;
    this.distancia;
    this.sprint;
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


var Sprints = [];

var contador = 0;

var num = 0;

function run(){
    contador++;
    var numSprint = document.getElementById("numSprint");
    numSprint.innerHTML = "<p>SPRINT " + contador + "</p>";
    var Sprint = [new SprintIndividual(), new SprintIndividual(), new SprintIndividual(), new SprintIndividual()];
    for (var i=0;i<caracoles.length;i++){
        
        caracoles[i].sprint = Math.floor(Math.random() * caracoles[i].velocidad) + 1;
        /*var sprint2 = Math.floor(Math.random() * caracoles[i].velocidad) + 1;
        var sprint3 = Math.floor(Math.random() * caracoles[i].velocidad) + 1;
        var sprint4 = Math.floor(Math.random() * caracoles[i].velocidad) + 1;
        */caracoles[i].distancia = caracoles[i].distancia + caracoles[i].sprint;   
    }
    
    caracoles.sort(function (a, b){return (b.distancia - a.distancia)});
    
    for (var i=0;i<caracoles.length;i++){

        var numCargol=i+1;
        Sprint[i].nombre = caracoles[i].nombre;
        Sprint[i].sprint = caracoles[i].sprint;
        Sprint[i].total = caracoles[i].distancia;
        var infoSprint1 = document.getElementById("infoSprint"+numCargol);
        infoSprint1.innerHTML = "<div class='col-xs-12 col-sm-6 col-md-6' style='background-color: #cccc00 '>" + numCargol+". " + caracoles[i].nombre 
                + " / " + "Total: " + caracoles[i].distancia + " / " + "Sprint: " + caracoles[i].sprint + "</div>";                                     
       
    }

    Sprints.push(Sprint);
    showSprints();
}

function showSprints(){
    var info = document.getElementById("info");
    info.innerHTML ="";
    for (var i=0;i<Sprints.length;i++){
        var Sprint=Sprints[i];

        info.innerHTML += "<div class='col-xs-12 col-md-12' style='background-color: #666600'>SPRINT "+ (i+1) +"</div>"+
                "<div class='col-xs-12 col-md-12' style='background-color: #cccc00'>1. " + Sprint[0].nombre + " / " + Sprint[0].total + "</div>"+
                "<div class='col-xs-12 col-md-12' style='background-color: #cccc00'>2. " + Sprint[1].nombre + " / " + Sprint[1].total + "</div>"+
                "<div class='col-xs-12 col-md-12' style='background-color: #cccc00'>3. " + Sprint[2].nombre + " / " + Sprint[2].total + "</div>"+
                "<div class='col-xs-12 col-md-12' style='background-color: #cccc00'>4. " + Sprint[3].nombre + " / " + Sprint[3].total + "</div>";
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
            infoClasificacion1.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + "";
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

function nueva(){
    Sprints = [];
    showSprints();
    
    for (var i=0;i<caracoles.length;i++){

        var numCargol=i+1;
        var infoSprint1 = document.getElementById("infoSprint"+numCargol);
        infoSprint1.innerHTML = "<div class='col-xs-12 col-sm-6 col-md-6' style='background-color: #cccc00 '></div>";                                     
       
    }
    
}