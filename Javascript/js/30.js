const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;
    
    if(auth){
        resolve('Usuario autenticado');
    }else{
        reject('No se pudo iniciar sesion');
    }
});

usuarioAutenticado
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    })

// En los promises existen 3 valores
// pending: no se ha cumplido pero tampoco se ha rechazado
// fulfulled: ya se cumplido
// reject: se ha rechazado o no se pudo cumplir