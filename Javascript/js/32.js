//async await

function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log("descargando clientes....espere....");

        setTimeout(() => {
            resolve("Los clientes fueron descargados");
        }, 5000);
        
    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve =>{
        console.log("descargando pedidos....espere....");

        setTimeout(() => {
            resolve("Los pedidos fueron descargados");
        }, 3000);
        
    });
}

async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log("Este codigo no se bloquea");
console.log(2+2);

//esto es para mostrarlo despues de cierta cantidad de milisegundos
// setTimeout(function() {
//     console.log("setTimeout...")
// }, 5000);
//con setInterval aparece constantemente cada cierta cantidad de segundos