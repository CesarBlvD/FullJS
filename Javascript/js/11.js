const producto={
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}


//forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(nombreProducto);

//Destructuring
//extrae el valor y crea la variable en un solo paso


// const {precio} = producto;
// const{nombreProducto} = producto;
const {precio,nombreProducto} = producto;

console.log(precio);