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
       return producto
       
    }
    
    







    document.getElementById("btn-enviar").style.color ="orange"
    document.getElementById("btn-enviar").textContent ="Comprar"