


//LISTA SERVICIOS HTML. Experimentando 2 metodos distintos
//x createElement
const analogic1 = document.createElement("li")
analogic1.setAttribute("class","descripcion")
analogic1.textContent = "Combo Analógico: sesión 35mm (incluye revelado x1 rollo de 36exp)"
document.getElementById("analogic").appendChild(analogic1)

const analogic2 = document.createElement("li")
analogic2.setAttribute("class","descripcion")
analogic2.textContent = "Sesión 35mm (no incluye revelado)"
document.getElementById("analogic").appendChild(analogic2)

const digital1 = document.createElement("li")
digital1.setAttribute("class","descripcion")
digital1.textContent = "Flyers promocionales"
document.getElementById("digital").appendChild(digital1)

const digital2 = document.createElement("li")
digital2.setAttribute("class","descripcion")
digital2.textContent = "Foto Producto + Retoque digital."
document.getElementById("digital").appendChild(digital2)

//inyectando HTML 
document.getElementById("vid").innerHTML += `
       
          <li class="descripcion">Producción de pieza audiovisual</li>
          <li class="descripcion">Montaje y Posproducción </li>      
      `




