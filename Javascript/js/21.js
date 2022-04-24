//Arrow functions

//declaracion de funcion
// sumar();
// function sumar(){
//     console.log(10+10);
// }

//solo aqui funciona el arrow functions
//expresion de la funcion
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];
const sumar2 = (n1, n2) => {
    console.log(n1 + n2);
}
sumar2(5,10);

const aprendiendo = (tecnologia) =>{
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo("Javascript");

let resultado;

resultado = carrito.some(producto => producto.nombre === 'Celular');
resultado = carrito.reduce((total, producto) => total + producto.precio,0);
resultado = carrito.filter((producto) => producto.precio > 400);
resultado = carrito.filter((producto) => producto.nombre !== 'Celular');
console.log(resultado);