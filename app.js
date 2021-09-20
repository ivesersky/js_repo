alert("PIEDRA PAPEL O TIJERA");

let pregunta = prompt("Te animas a jugar una partida conmigo?(si/no):");

if(pregunta == "si"){
    let eleccion = prompt("Elegi la opcion (piedra/papel/tijera)");
    if(eleccion == "piedra"){
      alert("Empate! Veo que estamos sincronizados o.O");
    
    }
    else if(eleccion == "papel"){
        alert("Me has ganado!");
    }
    else if(eleccion == "tijera"){
        alert("UFFF intenta de nuevo :D");
    }
}
else if(pregunta == "no"){
    alert("Bueno, que lastima!");
}
else{
    alert("No entiendo ese lenguaje >:c");
}


