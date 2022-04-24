// this

const reservacion = {
    nombre: 'Cesar',
    apellito: 'Hernandez',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${reservacion.nombre} reservo y su cantidad a pagar es ${reservacion.total}`)
    }
}



const reservacion2 = {
    nombre: 'Cesar',
    apellito: 'Hernandez',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`)
    }
}

reservacion.informacion();
reservacion2.informacion();