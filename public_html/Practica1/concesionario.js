

function Coche(){
    this.modelo;
    this.precio;
    this.extras = [5];
    this.addExtra = function(extra){
        this.extras.push(extra);
        return this.extras.length;
    };
    this.getExtra = function(numExtra){
        return this.extras[numExtra];
    };
}

var coche1 = new Coche();
coche1.modelo = "Opel Vectra";
coche1.precio = 15000;

document.write('<br />Nombre Coche: ');
document.write(coche1.modelo);
document.write('<br />Precio: ');
document.write(coche1.precio);
var numExtra = coche1.addExtra("Airbag");
var extra = coche1.getExtra(numExtra-1);
document.write('<br />Extra: ');
document.write(extra);


function Concesionario(){
    this.nombre;
    this.direccion;
    this.setNombre = function(nombre){
        this.nombre = nombre;
    }
    this.setDireccion = function(direccion){
        this.direccion = direccion;
    }
    this.comanda = [];
    this.addComanda = function(coche){
        this.comanda.push(coche);
        return this.comanda.length;
    };
}

document.write('<br/>');
document.write('<br/>');

var myConcesionario= new Concesionario();
myConcesionario.setNombre("Mario Kart");
myConcesionario.setDireccion("c/Mushroom Kingdom 1");

var coche2 = new Coche();
coche2.nombre="Fantastico!";
coche2.precio="70000€";
var numExtra = coche2.addExtra("Airbag");
var extra = coche2.getExtra(numExtra-1);
var posicionComanda = myConcesionario.addComanda(coche2);

document.write('<br />Nompre Concesionario: ');
document.write(myConcesionario.nombre);
document.write('<br />Direccion: ');
document.write(myConcesionario.direccion);
document.write('<br /> Nombre coche: ');
document.write(myConcesionario.comanda[posicionComanda-1].nombre);
document.write('<br /> Nombre extra: ');
document.write(myConcesionario.comanda[posicionComanda-1].extras[numExtra-1]);

document.write('<br/>');
document.write('<br/>');

////////////////////////////////////


var concesionario2= new Concesionario();
concesionario2.setNombre("AutoBarcelona");
concesionario2.setDireccion("c/Sants 25");

function Extra(){
    this.nombre;
    this.precio;
}
var extra = new Extra();
extra.nombre = "Airbag";
extra.precio = 200;

var extras = [extra, ["Llantas brillantes",250], ["ABS",500], ["Compresor",50], ["Pegatinas",120], ["Elevaduras",50], ["Tubo de escape",100], ["Parachoques",80], ["Aleron",150]]; 

var coche3 = new Coche();
coche3.nombre="Fantastico!";
coche3.precio="70000€";


var coche4 = new Coche();
coche4.nombre="Velocidelfin";
coche4.precio="100000€";

for(i=0; i<4; i++){
    var random = Math.floor(Math.random()*extras.length);
    coche3.addExtra(extras[random]);
    extras.splice(random, 1);
    var random2 = Math.floor(Math.random()*extras.length);
    coche4.addExtra(extras[random2]);
    extras.splice(random2, 1);
}
//for(i=0; i<4; i++){
//    var random2 = Math.floor(Math.random()*extras.length);
//    coche4.addExtra(extras[random2]);
//    extras.splice(random2, 1);
//}


document.write('<br />Nompre Concesionario: ');
document.write(concesionario2.nombre);
document.write('<br />Direccion: ');
document.write(concesionario2.direccion);



document.write('<br />');
document.write('<br />');
document.write("<table border='1'  cellspacing='0'>")

document.write("<tr>");
document.write("<th>Nombre</th><th>Extras</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(coche3.nombre);
document.write("</td>");
document.write("<td>");
document.write(coche3.getExtra(1) + "<br />");
document.write(coche3.getExtra(2) + "<br />");
document.write(coche3.getExtra(3) + "<br />");
document.write(coche3.getExtra(4) + "<br />");
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(coche4.nombre);
document.write("</td>");
document.write("<td>");
document.write(coche4.getExtra(1) + "<br />");
document.write(coche4.getExtra(2) + "<br />");
document.write(coche4.getExtra(3) + "<br />");
document.write(coche4.getExtra(4) + "<br />");
document.write("</td>");
document.write("</tr>");

document.write("</table>");


