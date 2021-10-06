
class Producto{
 constructor(categoria,descripcionServicio,precio){
     this.categoria = categoria;
     this.descripcionServicio = descripcionServicio;
     this.precio = precio;
 }

}

let listaServicios = [];
console.log("Listado de servicios disponibles:")
listaServicios.push(new Producto("video", "Montaje y Posproduccion", 15650))
listaServicios.push(new Producto("digital", "Foto Producto + Retoque digital", 10890))
listaServicios.push(new Producto("analogico", "Book 35mm", 16985))

listaServicios.sort((a,b) =>{
    if(a.categoria > b.categoria){
        return 1
    }
    if(a.categoria < b.categoria){
        return -1
    }return 0
})
 
listaServicios.forEach(serv => {
    console.log(serv.categoria);
}) 

let search = prompt("¿Que servicio desea buscar?")
let buscadorMultiple = listaServicios.filter(serv => serv.categoria === search)
console.log(buscadorMultiple);

