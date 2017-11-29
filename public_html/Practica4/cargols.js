function Caracol(){
    this.nombre;
    this.puntos = 0;
    this.velocidad = 10;
    this.distancia = 0;
    this.sprint;
    this.mascota = new Mascota();
    
}

function Mascota(){
    this.nombre;
    this.slogan;
}

var c1 = new Caracol();
var c2 = new Caracol();
var c3 = new Caracol();
var c4 = new Caracol();
//c1 = { "nombre": "Speed Cargol", "puntos" : 0, "velocidad": 10, "distancia":0, };
//c2 = { "nombre": "Cargolet", "puntos" : 0, "velocidad": 10, "distancia":0};
//c3 = { "nombre": "Slow Cargol", "puntos" : 0, "velocidad": 10, "distancia":0};
//c4 = { "nombre": "Gran Cargol", "puntos" : 0, "velocidad": 10, "distancia":0};
c1.nombre = "Speed Cargol";
c2.nombre = "Cargolet";
c3.nombre = "Slow Cargol";
c4.nombre = "Gran Cargol";
c1.mascota.nombre = "Tortuga";
c1.mascota.slogan = "Cowabunga";
c2.mascota.nombre = "Pirata";
c2.mascota.slogan = "Yahr!";
c3.mascota.nombre = "Chico";
c3.mascota.slogan = "3 puntos!";
c4.mascota.nombre = "Pokemon";
c4.mascota.slogan = "Catch Em!";



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
        caracoles[i].distancia = caracoles[i].distancia + caracoles[i].sprint;   
    }
    
    caracoles.sort(function (a, b){return (b.distancia - a.distancia)});
    
    for (var i=0;i<caracoles.length;i++){

        var numCargol=i+1;
        Sprint[i].nombre = caracoles[i].nombre;
        Sprint[i].sprint = caracoles[i].sprint;
        Sprint[i].total = caracoles[i].distancia;
        
        var infoSprint1 = document.getElementById("infoSprint"+numCargol);
        infoSprint1.innerHTML = numCargol+". " + caracoles[i].nombre + " / " + "Total: " + caracoles[i].distancia + " / " + "Sprint: " + caracoles[i].sprint + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan ;                                     
       
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
            infoClasificacion1.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
        }else if(i==1){
            var infoClasificacion2 = document.getElementById("infoClasificacion2");
            infoClasificacion2.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
        }else if(i==2){
            var infoClasificacion3 = document.getElementById("infoClasificacion3");
            infoClasificacion3.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
        }else if(i==3){
            var infoClasificacion4 = document.getElementById("infoClasificacion4");
            infoClasificacion4.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
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
    
    for (var i=0;i<caracoles.length;i++){
        caracoles[i].distancia = 0;
    }
    
    contador = 0;
    var numSprint = document.getElementById("numSprint");
    numSprint.innerHTML = "<p>SPRINT</p>";
}

var deleteSprints = [];

function borrar(){
    var numero = window.prompt("Sprint a borrar: ");
    deleteSprints.push(Sprints[numero-1]);
    Sprints.splice((numero-1), 1);
    showSprints(); 
    showDelete();
}

function showDelete(){
    var infoDelete = document.getElementById("infoDelete");
    infoDelete.innerHTML ="";
    for (var i=0;i<deleteSprints.length;i++){
        var Sprint=deleteSprints[i];

        infoDelete.innerHTML += "<div class='col-xs-12 col-md-12' style='background-color: #666600'>SPRINT "+ (i+1) +"</div>"+
                "<div class='col-xs-12 col-md-12' style='background-color: #cccc00'>1. " + Sprint[0].nombre + " / " + Sprint[0].total + "</div>"+
                "<div class='col-xs-12 col-md-12' style='background-color: #cccc00'>2. " + Sprint[1].nombre + " / " + Sprint[1].total + "</div>"+
                "<div class='col-xs-12 col-md-12' style='background-color: #cccc00'>3. " + Sprint[2].nombre + " / " + Sprint[2].total + "</div>"+
                "<div class='col-xs-12 col-md-12' style='background-color: #cccc00'>4. " + Sprint[3].nombre + " / " + Sprint[3].total + "</div>";
    }
}

function borrarDelete(){
    var numeroDelete = window.prompt("Sprint eliminado a borrar: ");
    deleteSprints.splice((numeroDelete-1), 1);
    showDelete(); 
}

var variable = 0;

function ranking(){
    
    
    if(variable == 0){
        caracoles.sort(function (a, b){return (a.puntos - b.puntos)});
        for (var i=0;i<caracoles.length;i++){
            if(i==0){
                var infoClasificacion1 = document.getElementById("infoClasificacion1");
                infoClasificacion1.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
            }else if(i==1){
                var infoClasificacion2 = document.getElementById("infoClasificacion2");
                infoClasificacion2.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
            }else if(i==2){
                var infoClasificacion3 = document.getElementById("infoClasificacion3");
                infoClasificacion3.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
            }else if(i==3){
                var infoClasificacion4 = document.getElementById("infoClasificacion4");
                infoClasificacion4.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
            }
        }
        variable ++;
    }else{
        caracoles.sort(function (a, b){return (b.puntos - a.puntos)});
        for (var i=0;i<caracoles.length;i++){
            if(i==0){
                var infoClasificacion1 = document.getElementById("infoClasificacion1");
                infoClasificacion1.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
            }else if(i==1){
                var infoClasificacion2 = document.getElementById("infoClasificacion2");
                infoClasificacion2.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
            }else if(i==2){
                var infoClasificacion3 = document.getElementById("infoClasificacion3");
                infoClasificacion3.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
            }else if(i==3){
                var infoClasificacion4 = document.getElementById("infoClasificacion4");
                infoClasificacion4.innerHTML = ""+ (i+1) + ". " + caracoles[i].nombre + " / Puntos: " + caracoles[i].puntos + " / Velocidad: " + caracoles[i].velocidad + " / " + caracoles[i].mascota.nombre + " " + caracoles[i].mascota.slogan;
            }
        }
        variable --;
    }
}