console.log("hola mundo")

// Tipos de datos en JS
// String: cadena de caracteres.
// Boolean: true false.
// Null: nulo.
// Number: 1234 1 34 44
// "123" entre "" es un string != 123
// Undefined: no definido.
// Object: objeto. puede tener cualquier combinacion de datos

// Definicion de variables
// let
// const

let miPrimerVariable = "mi primera variable !"
console.log(miPrimerVariable)
//mutabilidad
miPrimerVariable = "esto cambio"
console.log(miPrimerVariable);

//booleans
let miBoolean = true;
let miOtroBoolean = false;

//numeros
let miNumero = 1994
let miNumero2 = 19
let miNumero3 = -18

console.log(miNumero,miNumero2,miNumero3);

let undef 
console.log(undef);

let nulo = null
console.log(nulo);

// Objeto (agrupacion de datos con sentido entre si (propiedades))
const miPrimerObjeto={}

const miObjeto = {
    unNumero: 12,
    unString: "sdaibsaijd",
    unaCondicion: true,
}
console.log(miObjeto);

// Arreglos
const arr = [1,2,"hola" ,miObjeto]
console.log(arr);
arr.push(15)
console.log(arr);