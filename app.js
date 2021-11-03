//TOGGLE. MUESTRA-OCULTA DESLIZANDO PARA ARRIBA-ABAJO

 $(".btn-ocultar").on("click", ()=>{
     $(".imgProd").slideToggle(1500);
     $(".card-subtitle.text-muted").slideToggle(1500);

 })


// // AJAX. METODO GET

// // CREO UNA CONSTANTE: Declaramos la url que vamos a usar para el GET.
// const URLGET = "https://jsonplaceholder.typicode.com/posts"

// //Agregamos un botón con jQuery
// $("body").prepend('<button id="btn1">GET</button>');

// //PETICION AJAX --Escuchamos el evento click del botón agregado
// $("#btn1").click(() => { 

//     $.get(URLGET, function (respuesta, estado) {
//         console.log(estado)
//           if(estado === "success"){
//             let misDatos = respuesta;

//             for (const dato of misDatos) {
//               $("body").prepend(`<div>
//                                    <h3>${dato.title}</h3>
//                                    <p> ${dato.body}</p>
//                                   </div>`);
//             }  
//           }
//     });
// });

// //PETICION A UNA API . Esto se retoma en Backend
// const url = "https://jsonplaceholder.typicode.com/posts" //ruteo el servidor, que puede ser un html un css o como aca un JSON
// //console.log(url) para ver si me esta reconociendo bien el url

// //JQUERY+AJAX
// $.get(url, (respuesta,estado)=>{
 
//   if(estado == "success"){
    
//       //me muestra por consola la cantidad de data que tengo en esa API que puse como url, osea de ese server
//      respuesta.forEach(element => {
//          //console.log(element.id)
//      });
//     }
// }) 



//AJAX. METODO POST
//ej. yo quiero mostrar el dolar actualizado. PETICION SIMPLE
setInterval( ()=>{

    const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    
    $.get(url,(data,est) =>{
        document.getElementById("dolar").innerHTML ="" //para que se superpongan y no se repitan
        if(est== "success"){
            //console.log(data)
            console.log("DOLAR ACTUALIZADO")
            data.forEach(element => {
                //.casa porque es la propiedad del objeto que en este caso es el url
                document.getElementById("dolar").innerHTML += `
                    <div class="col-3 carritoCard">
                        <p>${element.casa.nombre}</p>
                        <p class="text-danger">${element.casa.compra}</p>
                        <p class="text-success">${element.casa.venta}</p>
                    </div>
                    `
                    
                ;
            });
    
    
        }
    })
}, 5000)

//PERO Y SI TENGO QUE HACER UNA PETICION AJAX A 5MILLONES DE USUARIOS?
//No puedo estar imprimiendo HTML 5millones de veces...
//FORMA CORRECTA: INYECTAR EL HTML Y CAMBIARLE EL CONTENIDO CADA X TIEMPO, 
// en vez de cambiar el contenido a cada replica
//1ro inyectamos etiqueta y 2do cambio el dato

