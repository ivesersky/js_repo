
class Producto{
 constructor(categoria,servicio,precio){
     this.categoria = categoria;
     this.servicio = servicio;
     this.precio = precio;
 }

}

let listaServicios = [];
console.log("Listado de servicios disponibles:")
listaServicios.push(new Producto("produccion", "Produccion de pieza audiovisual", 15450))
listaServicios.push(new Producto("montaje", "Montaje y Posproduccion", 8500))
listaServicios.push(new Producto("flyers", "Flyers promocionales", 3750))
listaServicios.push(new Producto("foto producto", "Foto Producto + Retoque digital", 9890))
listaServicios.push(new Producto("analogico", "Sesion 35mm (sin revelado)", 4085))
listaServicios.push(new Producto("combo analogico", "Sesion 35mm (incluye revelado x1)", 5985))

listaServicios.sort((a,b) =>{
    if(a.servicio > b.servicio){
        return 1
    }
    if(a.servicio < b.servicio){
        return -1
    }return 0
})
 
listaServicios.forEach(serv => {
    console.log(serv.servicio);
}) 

const guardarDatos = () => {

    console.log(document.getElementById("categoria").value)
    console.log(document.getElementById("servicio").value)
    console.log(document.getElementById("precio").value)

   return ""
}

document.getElementById("labelForm").style.color = "steelblue"
document.getElementById("labelForm").style.fontSize = "18px"



//de esta forma no me funciona :(
/*const nuevoProducto = new Producto({
         categoria: document.getElementById("categoria").value,
         servicio: document.getElementById("servicio").value,
         precio: document.getElementById("precio").value
     }) */ 