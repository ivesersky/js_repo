
//Pedir datos
//Calcular
//Mostrar resultado




let precio = Number(prompt("Ingresar el precio del servicio a contratar: (sin puntos ni comas)"));
let porcentaje = 6;

let num3 = calcular(precio,porcentaje);
function calcular(a,b){
    let resultado = a + ((a*b)/100);
    return resultado;
    
}
console.log(num3);