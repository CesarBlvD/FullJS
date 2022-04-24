//POO

//Object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Objecto Constructor

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}
//Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}


const producto2 = new Producto('Monitor curvo de 49" ',800);
const producto3 = new Producto('Laptop ',300);



function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio de: ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

