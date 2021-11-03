// //TOGGLE. MUESTRA-OCULTA DESLIZANDO PARA ARRIBA-ABAJO

 $(".btn-ocultar").on("click", ()=>{
     $(".imgProd").slideToggle(1500);
     $(".card-subtitle.text-muted").slideToggle(1500);

 })

// AJAX CON JQUERY XMLHttpRequest

// CREO UNA CONSTANTE: Declaramos la url que vamos a usar para el GET.
const URLGET = "https://jsonplaceholder.typicode.com/posts"

//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');

//PETICION AJAX --Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 

    $.get(URLGET, function (respuesta, estado) {

          if(estado === "success"){
            let misDatos = respuesta;

            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h3>${dato.title}</h3>
                                   <p> ${dato.body}</p>
                                  </div>`);
            }  
          }
    });
});

//PETICION A UNA API . Esto se retoma en Backend
const url = "https://jsonplaceholder.typicode.com/posts" //ruteo el servidor, que puede ser un html un css o como aca un JSON
console.log(url)

//JQUERY
$.get(url, (respuesta,estado)=>{
 
  if(estado == "success"){
    
      //me muestra por consola la cantidad de data que tengo en esa API que puse como url, osea de ese server
     respuesta.forEach(element => {
         console.log(element.id)
     });
    }
}) 