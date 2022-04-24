//Array methods

const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo'];

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

//for each

meses.forEach(function(mes) {
    if (mes== 'Marzo'){
        console.log('Marzo si existe');
    }
});

//includes
let resultado = meses.includes('Diciembre');

//Some ideal para arrelgos de objetos
resultado= carrito.some(function(producto){
    return producto.nombre === 'Celular PRO'
})

//Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio //muestra la suma de todos los productos
},0);

//filter
resultado = carrito.filter(function(producto){
    return producto.precio>400 //muestra todos los precios mayores a 400, como si fuera un select
});


console.log(resultado);