//Arreglos

const numeros = [10,20,30,40,50];
console.table(numeros);

//los arreglos pueden almacenar cualquier tipo de dato
//Acceder a los valores de un arreglo

// console.log(numeros[4]);
// console.log(numeros[2]);

//conocer la extension de un arreglo

// console.log(meses.length);

// numeros.forEach(function(numero)
// {
//     console.log(numero);
// })

// numeros[5] = 60;
numeros.push(70,80);//agregar al final del arreglo
numeros.unshift(-10,-20);//agrega al inicio del arreglo

console.table(numeros);

const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

// meses.pop();//elimina al el ultimo elemento
// meses.shift();//elimina el primer elemento

// meses.splice(2, 1); //recorre el arreglo a la poosicion dos y elimina 1 despues del arreglo

// console.table(meses);

//Rest Operator o spread operator

const nuevoArreglo = ['junio',...meses]; //copia el arreglo, lo modifica y lo guarda en una nueva variable
//si colocas la variable antes o despues afecta en donde se va a guardar
console.log(nuevoArreglo);