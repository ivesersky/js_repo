/*  DESAFIO 3: CREAR UN ALGORITMO UTILIZANDO UN CICLO.
-Pagina HTML+Codigo fuente en JavaScript. 
-Nombre del .zip "claseApellido"
Consigna: Crear algoritmo que repita un bloque de instrucciones. En cada repeticion debe efectuarse una operacion o comparacion para obtener salida por alerta o por consola.

let num1;
let num2;

do{
 num1 = Math.floor(Math.random() * (7 - 1) +1);
 num2 = Math.floor(Math.random() * (7 - 1) +1);

 console.log(num1,num2);
}
while (num1 === num2 )
  

*/

let opcion = prompt("¿Quieres jugar? (si/no)")
if(opcion =="si"){
    let color = prompt("Por favor, ingresa un color");
    
    switch (color){
        case "rojo":
            alert("Su color complementario es el verde");
            break;
        case "azul":
            alert("Su color complementario es el naranja");
            break;
        case "verde":
            alert("Su color complementario es el rojo :D");
            break;
        case "violeta":
            alert("Su color complementario es el amarillo");
            break;
        case "amarillo":
            alert("Su color complementario es el violeta");
            break;
        case "naranja":
            alert("Su color complementario es el azul");
            break;    
        default:
            alert("El color ingresado no existe o no esta en mi base de datos, lo siento :(");
            break;
    }

}
else{
    alert("Que lastima :( nos vemos pronto")

}