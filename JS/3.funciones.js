// funciones 

function nombre (argumento) {
    

    for (i=0 ; i< argumento.length; i++) {
        console.log(argumento[i]);
    }
}
const numeros = [1,2,3,4,5]
const nombres = ["kiki","mimi","luna","charly"]
nombre(numeros)
nombre(nombres)

function suma (a,b) {
    return a+b;
}
const resultadoSuma = suma(1,4)
console.log("resultado: ",resultadoSuma);



function sumar (a,b,cb){
    const resultado = a + b;
    cb(resultado)
}
function callback (result){
    console.log("resultado", result);
}

sumar(2,6,callback)


// arrow function
const miFatArrowFunction = (a,b) => a + b

console.log(miFatArrowFunction(1,2));

const otraFat = (a,b) => {
    return a + b
}

sumar (2,3,function (r) {
    console.log("soy una anonima, el resultado es: ", r);
})