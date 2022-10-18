const sumar = (num1, num2) => {
   // let num1 = 4;
    //let num2 = 8;

    let suma = num1 + num2;
    console.log(`El resultado es: ${suma}`)
}

const restar = (num1, num2) => {
    // let num1 = 4;
     //let num2 = 8;
 
     let resta = num1 - num2;
     console.log(`El resultado es: ${resta}`)
 }

 const multiplicar = (num1, num2) => {
    // let num1 = 4;
     //let num2 = 8;
 
     let multiplicacion = num1 * num2;
     console.log(`El resultado es: ${multiplicacion}`)
 }


 const dividir = (num1, num2) => {
    // let num1 = 4;
     //let num2 = 8;
 
     let division = num1 / num2;
     console.log(`El resultado es: ${division}`)
 }
 const operaciones={}
operaciones.sumar=sumar;
operaciones.restar=restar;
operaciones.multiplicar=multiplicar;
operaciones.dividir=dividir;

module.exports=operaciones


