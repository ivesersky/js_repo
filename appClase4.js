
//Pedir datos
//Calcular
//Mostrar resultado



let video = "VIDEO $15.650";
let digital = "DIGITAL $10.890";
let analogico = "ANALOGICO $16.985";

let precio = Number(prompt("Ingresar el precio del servicio a contratar: (sin puntos ni comas) " +video+" "+digital+" "+analogico));
let porcentaje = 6;

let num3 = calcular(precio,porcentaje);
function calcular(a,b){
    let resultado = a + ((a*b)/100);
    return resultado;
    
}
console.log("PRECIO FINAL CON IVA $"+ num3);