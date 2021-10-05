let Servicio = prompt("Ingrese el servicio a comprar:");

class Productos{
    constructor(categoria){
        this.categoria = categoria;
        this.precio;
        this.DescripcionServicio;
    }

    //metodo
    informacionDeCompra(){
        if(this.categoria=="video"){
            this.precio = 15650;
            this.DescripcionServicio = "Montaje y Posproduccion";
            console.log(`Contataste el servicio de
             ${this.DescripcionServicio}, le salio $ ${this.precio}`)    
        }
        else if(this.categoria=="digital"){
            this.precio = 10890;
            this.DescripcionServicio = "Retoque Digital";
            console.log(`Contataste el servicio de
             ${this.DescripcionServicio}, le salio $ ${this.precio}`)
        }
        else if(this.categoria=="analogico"){
            this.precio = 150;
            this.DescripcionServicio = "Sesion Analogica";
            console.log(`Contataste el servicio de
             ${this.DescripcionServicio}, le salio $ ${this.precio}`)
        }
        else{ alert("Ese no es un servicio valido")}
    }
}

let compra = new Productos (Servicio);
compra.informacionDeCompra();