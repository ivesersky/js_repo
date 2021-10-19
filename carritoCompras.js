const nuevoCarrito = document.querySelector(".nuevo-carrito");
let listaProductos = [];
let compra;


class Producto{
 constructor(categoria,producto,precio){
     this.categoria = categoria;
     this.producto = producto;
     this.precio = precio;
 }

}

let producto1 = new Producto("Analogico", "Sesion 35mm (no incluye revelado)", 4085)
let producto3 = new Producto("Digital", "Flyers promocionales", 3750)
let producto2 = new Producto("Video", "Produccion de pieza audiovisual", 15450)
listaProductos.push(producto1,producto2,producto3);
console.log(listaProductos);

for(let i =0; i< listaProductos.length; i++){
    const div = document.createElement("div");
    div.classList.add("item-carrito");
    div.innerHTML = `
    <div class="card " >
        <div class="card-body">
        <p class="card-text">${listaProductos[i].producto}</p>
        <h6 class="card-subtitle mb-2 text-muted">${listaProductos[i].categoria}</h6>
        <h6 class="card-subtitle mb-2 text-muted">Precio: $5985</h6>
        <button id="ide" value="${listaProductos[i].categoria}">Comprar</button>
        </div>
    </div>

    `;
    nuevoCarrito.appendChild(div);
}

const guardarDatos = () => {

    const producto = new Producto({
        categoria : document.getElementById("categoria").value,
        producto : document.getElementById("producto").value,
        precio : document.getElementById("precio").value
    })
    return producto
}


/*
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

*/


/*
const guardarDatos = () => {

    console.log(document.getElementById("categoria").value)
    console.log(document.getElementById("servicio").value)
    console.log(document.getElementById("precio").value)

   return ""
}

document.getElementById("labelForm").style.color = "steelblue"
document.getElementById("labelForm").style.fontSize = "18px"


const nuevoProducto = new Producto({
         categoria: document.getElementById("categoria").value,
         servicio: document.getElementById("servicio").value,
         precio: document.getElementById("precio").value
}) 
*/