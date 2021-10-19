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

       document.getElementById("aca").innerHTML += `
       <p>${producto.categoria}
          <li class="descripcion">${producto.servicio}</li>
          <li>$ ${producto.precio}</li>
          <button id="btn-comprar" value="${producto.precio}">comprar</button> 
       </p>
      `

       return producto
       
    }
    
    
//En desafio 9 agrego el boton de enviar con funcionalidad. Por ahora con DOM lo mantengo oculto.
let boton = document.getElementById("btn-enviar");
boton.parentNode.removeChild(boton);