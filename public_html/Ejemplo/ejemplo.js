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


var random = Math.random() * (12 - 0) + 0;
var random = Math.floor(Math.random()*(12-0))+0;
document.write(random);
