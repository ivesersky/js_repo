/*  DESAFIO 3: CREAR UN ALGORITMO UTILIZANDO UN CICLO.
-Pagina HTML+Codigo fuente en JavaScript. 
-Nombre del .zip "claseApellido"
Consigna: Crear algoritmo que repita un bloque de instrucciones. En cada repeticion debe efectuarse una operacion o comparacion para obtener salida por alerta o por consola.
*/


let num1 = Number(prompt("Ingrese un numero"))


if(parseInt(num1)){
    for (let i=0; i <= num1; i= i+2){
        console.log(i);
    }

}
else{
    alert("El dato que ingresaste no es un numero.")
}

