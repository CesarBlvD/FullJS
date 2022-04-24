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

//foreach
//para consultar el arreglo e imprimir resultados
carrito.forEach((producto) => {
    console.log(producto.nombre);
});


//map
//map se utiliza para crear nuevos arreglos  
carrito.map((producto) => {
    console.log(producto.nombre);
});