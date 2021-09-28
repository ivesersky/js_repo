//  DESAFIO 3: CREAR UN ALGORITMO UTILIZANDO UN CICLO.

let i = 0


while(i<5){
    let color = prompt("Por favor, ingresa un color primario");
    
    switch (color){
        case "rojo":
            alert("Su color complementario es el verde");
            i++;
            break;
        case "azul":
            alert("Su color complementario es el naranja");
            i++;
            break;
        case "verde":
            alert("Su color complementario es el rojo :D");
            i++;
            break;
        case "amarillo":
            alert("Su color complementario es el violeta");
            i++;
            break;    
        default:
            alert("El color ingresado no esta en mi base de datos, lo siento :(");
            i++;
            break;
    }

}

