
//ANIMACIONES CON JQUERY. ESCUCHO EL EVENTO Y TRIGGEREO UNA FUNCION
//TODO ESTO LO PUEDE HACER JAVSCRIPT INYECTANDO CODIGO.


//selecciono boton del html con jquery

// $("#btn1").on("click", () => {
//     //selecciono la caja con la clase tal y le damos el metodo mostrar pq estaba escondido desde la style.css
//     $(".box1").show()
// })
// //SE LE INYECTA COMO ATRIBUTO EN EL HTML sin si quiera tocar el html


// //FADE IN MOSTRAR CON TRANSICION
// $("#btn3").on("click", () => {
//     $(".box1").fadeIn(2000)
// })

// //fade OUT OCULTAR CON TRANSICION
// $("#btn4").on("click", () => {
//     $(".box1").fadeOut(3000)
// })

// //slideDown MUESTRA DESLIZANDO HACIA ABAJO. ESTE ES RE UTIL
// //PARA EL MENU HAMBURGUESA SI LO HAGO DESDE 0 PQ YO LO HICE CON BOOTSTRAP
// $("#btn4").on("click", ()=>{
// $(".box1").slideDown(2000)
// })


// //slideUp MUESTRA DESLIZANDO HACIA ARRIBA
// $("#btn2").on("click", ()=>{
//     $(".box1").slideUp(2000)
// })

// //TOGGLE. MUESTRA-OCULTA DESLIZANDO PARA ARRIBA-ABAJO

 $(".btn-ocultar").on("click", ()=>{
     $(".imgProd").slideToggle(1500);
     $(".card-subtitle.text-muted").slideToggle(1500);

 })


// 



