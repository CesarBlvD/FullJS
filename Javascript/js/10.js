// Objetos

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;

const producto={
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}



// console.log(producto.precio); //acceder a cada propiedad del objeto

// console.log(producto["precio"]); //es igual al ejemplo de arriba escrito de otra manera

//agregar propiedades
producto.imagen = "imagen.jpg";

//eliminar propiedades
delete producto.disponible;


console.log(producto);