
//Ingresar precio de costo
let video = "VIDEO $15.650";
let digital = "DIGITAL $10.890";
let analogico = "ANALOGICO $16.985";

ingresarDatos();
function ingresarDatos(){
    let precio = Number(prompt("Ingresar el precio del servicio: (sin puntos ni comas) " +video+" "+digital+" "+analogico));
    let porcentaje = 6;

    calcular(precio,porcentaje);
}

//Operacion IVA
function calcular( a, b){

    let result= a + ((a*b)/100);
    resultado(result);
}


//Mostrar precio calculado

function resultado(a){
    console.log("PRECIO FINAL CON IVA "+ a)
    alert("PRECIO FINAL CON IVA "+ a);
}