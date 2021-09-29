/*
function validar(nombre){
    let datoTrabajado = nombre.toLowerCase()

    if (datoTrabajado =="juan"){
        console.log("podes entrar");
    }else{
        console.log("no podes entrar");
    }
}

function entrarAlEdificio(){
    let pregunta =prompt("Como te llamas?")
    validar(pregunta)
}

//RETURN
entrarAlEdificio()




function mostrarNombreCompleto(nombre,apellido,edad){
    let respuesta =`Tu nombre es ${nombre} ${apellido} y tenes ${edad}`; 
    return respuesta;
}

console.log(mostrarNombreCompleto("julian","fuoco", 28))
*/

//Pedir datos
//Calcular
//Mostrar resultado



let producto = console.log(prompt("Elija 1 servicio a contratar (video/digital/analogico):"));
let iva = 150;

calcular(producto,iva);

function calcular(a,b){
 let resultado = a*b/100;
 return resultado;
}
