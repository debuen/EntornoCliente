//var infoUSu = [];
//infoUsu["nombre"] = "Juan";
//infoUsu["apellido"] = "Garcia";
//
////es lo mismo que lo anterior
////var infoUsu = { "nombre": "Juan",
////                "apellido" :"Garcia"};
//
//var usuarios = [];
//usuarios[1] = infoUsu;
//
//var usuario = usuarios[1];
//document.write('<br />Nombre Usuario: ');
//document.write(usuario.nombre);
//document.write('<br />Apellido: ');
//document.write(usuario.apellido);
//usuario.estudios.push("mecaninca");
//
//var estudio1 = usuario.estudios[0];
//document.write('<br />Estudio1: ');
//document.write(estudio1); 
//
//console.log(infoUsu);

//creamos clase
//function Aula(){
//    this.num_pcs;
//    this.num_aula;
//    
//}
////creamos objeto
//var aula22 = new aula();
//aula22.num_pcs = 35;
//aula22.num_aula = 22;
//
//
//function Hotel(){
//    this.num_hab;
//    this.estrellas;
//    this.direccion;
//    //creamos metodo
//    this.setEstrellas = function(estrellas){
//        this.estrellas = estrellas;
//    };
//}


//var random = Math.random() * (12 - 0) + 0;
//var random = Math.floor(Math.random()*(12-0))+0;
//document.write(random);

function Caracol(){
    this.nombre;
    this.puntos;
}
var c1 = new Caracol();
var c2 = new Caracol();
var c3 = new Caracol();
var c4 = new Caracol();
c1 = { "nombre": "Speed Cargol", "puntos" : 10};
c2 = { "nombre": "Cargolet", "puntos" : 100};
c3 = { "nombre": "Slow Cargol", "puntos" : 50};
c4 = { "nombre": "Gran Cargol", "puntos" : 80};
var caracoles = [c1, c2, c3, c4];
function btn(){

for (var i=0;i<caracoles.length;i++){
        
        if(i==0){
            var infoSprint1 = document.getElementById("infoSprint1");
            infoSprint1.innerHTML = "<div>" + "1. " + caracoles[i].nombre + " / " + "Total: " + caracoles[i].puntos+ "</div>";                                     
        }else if(i==1){
            var infoSprint1 = document.getElementById("infoSprint2");
            infoSprint1.innerHTML = "<div>" + "1. " + caracoles[i].nombre + " / " + "Total: " + caracoles[i].puntos+ "</div>";
        }else if(i==2){
            var infoSprint1 = document.getElementById("infoSprint3");
            infoSprint1.innerHTML = "<div>" + "1. " + caracoles[i].nombre + " / " + "Total: " + caracoles[i].puntos+ "</div>";
        }else if(i==3){
            var infoSprint1 = document.getElementById("infoSprint4");
            infoSprint1.innerHTML = "<div>" + "1. " + caracoles[i].nombre + " / " + "Total: " + caracoles[i].puntos+ "</div>";
        }
    }
    }