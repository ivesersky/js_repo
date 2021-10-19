class Producto{
    constructor({categoria,servicio,precio}){
        this.categoria = categoria;
        this.servicio = servicio;
        this.precio = precio;
    }
   
   }
   
   
const guardarDatos = () => {
    const producto = new Producto(
        {
            categoria : document.getElementById("categoria").value,
            servicio : document.getElementById("servicio").value,
            precio : document.getElementById("precio").value
        }
    )
    document.getElementById("nueva-lista").innerHTML += `
    <p>${producto.categoria}
       <li class="descripcion">${producto.servicio}</li>
       <li>$ ${producto.precio}</li>
       <button id="btn-comprar" value="${producto.precio}">comprar</button> 
    </p>
   `
   return producto
 }
       
    
    
document.getElementById("btn-enviar").addEventListener("click", () => {
    guardarDatos()
})
