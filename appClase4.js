
/*
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
*/

//Ingresar precio de costo
let video = "VIDEO $15.650";
let digital = "DIGITAL $10.890";
let analogico = "ANALOGICO $16.985";

ingresarDatos();
function ingresarDatos(){
    let precio = Number(prompt("Ingresar el precio del servicio: (sin puntos ni comas) " +video+" "+digital+" "+analogico));
    let porcentaje = 6;

    calcular(precio,porcentaje); //esto va aca porque son variables locales. es parte del proceso de llamar la funcion resultado
}

//Sumar IVA
function calcular( a, b){//c es operador pq esta en ese orden 

    let result= a + ((a*b)/100);
    resultado(result);
}


//Mostrar precio calculado

function resultado(a){
    console.log("PRECIO FINAL CON IVA "+ a)
    alert("PRECIO FINAL CON IVA "+ a);
}