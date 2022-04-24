//Clases

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    obtenerPrecio(){
        console.log(this.precio);
    }
}


const producto2 = new Producto('Monitor curvo de 49" ',800);
const producto3 = new Producto('Laptop ',300);

//herencia
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre,precio); //accede al constructor de arriba
        this.isbn=isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
    obtenerPrecio(){
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
}

const libro = new Libro('Javascript la revolucion', 120, '039492438109');

console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());