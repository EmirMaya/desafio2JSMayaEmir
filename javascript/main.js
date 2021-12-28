//Si es el precio del producto es mayor a 3000 no se compra.
// si el precio es entre 2000 y 3000 lo compramos en coutas.
// Si el precio es menor a 2000 compramos en efectivo

let precio = Number(prompt('Ingrese el precio del producto'));

if (precio > 3000) {
    alert('No compramos el producto :(');
} else if (precio >= 2000 && precio <= 3000) {
    alert('¡Compraremos el producto en coutas!');
} else if (precio <2000) {
    alert('¡Compraremos el producto en efectivo!');
}

//Ingrese usuario y contraseña
// En este caso voy a mejorar uno de los ejercicios que hicimos en clase
// Primero voy a definir una contrasenia simulando que el usuario ya esta registrado
// Lo mismo con el usuario
// Luego si le pedimos su usuario y contrasenia

let user = 'emirMaya';
let password = 'astonMartin';

let usuario = prompt('Ingrese usuario');
let contrasenia = prompt('Ingrese password');


if (usuario == user && contrasenia == password ) {
    alert(`Se ha iniciado sesión, bienvenido ${usuario}`);
} else if (usuario == '' || contrasenia == '') {
    alert('El usuario o la contraseña está vacío');
} else if (usuario != user) {
    alert(`El usuario ${usuario} es incorrecto`);
} else if (contrasenia != password) {
    alert(`La contraseña es incorrecta`);
}