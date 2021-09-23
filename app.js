/*
CUANDO SI USAR FUNCTION()

let dato= prompt("Ingrese el dato a mostrar") //tomar dato 
let resultado = dato + "Este dato viene por prompt" //manipularlo 
console.log(resultado)//imprimirlo
en clase lo que mostro es que repitio estas mismas 3 lineas x3

entonces se puede reemplazar por una FUNCION de este modo

function nombre(parametros){
    sentencia
}

//queremos que se ingrese un dato y se muestre por consola. la funcion debe llevar le nombre d ela tarea que realizan

function imprimirPorConsola(){ //aca estoy almacenando el algoritmo que se va a ejecutar cuando yo decida. PARA QUE FUNCIONE TENGO QUE LLAMARLO!!
    let dato= prompt("Ingrese el dato a mostrar") //tomar dato 
    let resultado = dato + " ---- Este dato viene por prompt" //crea variable resultado. manipularlo 
    console.log(resultado)//imprimirlo por consola
}

//LLAMO A LA FUNCION las veces que quiera
imprimirPorConsola()

CUANDO NO USAR FUNCTION() AL PEDO
aca por ejemplo, se podria no usar function suma y solo poner console.log
let num1 = 10
let num2 = 30

function suma(){
    console.log(num1 + num2)
}
suma()
Entonces, como lo uso bien para un caso asi? Del siguiente modo..
*/
//  PARAMETRO
function suma(num1,num2){//estos dos parametros vienen de cuando llamo la funcion abajo
    console.log(num1 + num2)
}
//   ARGUMENTO
suma(50,100)