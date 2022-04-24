//Metodos

const reproductor ={
    reproducir: function(id){
        console.log(`Reproduciendo Cancion con el Id: ${id}`);
    },
    pausar: function(){
        console.log("Pausando...");
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo la playlist ${nombre}`)
    },
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion: ${id}`)
}

reproductor.reproducir(3948);
reproductor.pausar();
reproductor.borrarCancion(30);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("HeavyMetal");