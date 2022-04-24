// "use strict"; //corer js en modo estricto

const producto={
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); //no te deja agregar ni eliminar propiedades con freeze
Object.seal(producto); //no te deja agregar ni eliminar propiedades pero si te deja modificar con seal

producto.imagen = "imagen.jpg";

console.log(Object.isSealed(producto));

console.log(producto);