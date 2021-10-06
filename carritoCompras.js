
class Producto{
 constructor(categoria,descripcionServicio,precio){
     this.categoria = categoria;
     this.descripcionServicio = descripcionServicio;
     this.precio = precio;
 }

}

let listaServicios = [];
console.log("Listado de categorias disponibles:")
listaServicios.push(new Producto("video", "Produccion de pieza audiovisual", 15450))
listaServicios.push(new Producto("video", "Montaje y Posproduccion", 8500))
listaServicios.push(new Producto("digital", "Flyers promocionales", 3750))
listaServicios.push(new Producto("digital", "Foto Producto + Retoque digital", 9890))
listaServicios.push(new Producto("analogico", "Sesion 35mm (sin revelado)", 13085))
listaServicios.push(new Producto("analogico", "Sesion 35mm (incluye revelado x1)", 16985))


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

