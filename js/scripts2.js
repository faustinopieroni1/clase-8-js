function Productos(nombre, precio, stock, categoria) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.categ = categoria
}
let productoA = new Productos("Truemade whey protein isolated", 10, 10, "proteina")
let productoB = new Productos("Premium whey protein", 8, 10, "proteina")
let productoC = new Productos("Prewar", 5, 10, "pre entreno")

let productos = [productoA, productoB, productoC]

//----------------------------------------------------------------------------

let catalogo = document.getElementById("catalogo")// Accede al nodo "catalogo"

//----------------------------------------------------------------------------



//Generar elementos en masa

function generador (parametroQueCambia) {   //--> Funcion que almacena el ciclo

    for (let generadorProductos of parametroQueCambia) {//--> Repetir accion para c/elemeno de "productos"

        let card = document.createElement("div") //--> Crea un elemento "div"

        card.innerHTML = `<h2>${generadorProductos.nombre}</h2> <p>${generadorProductos.precio}` //--> Crea elementos dentro de "card"  "  `${}`  "--> Permite poner una variable

        catalogo.append(card) //--> Le asigna "catalogo"(padre) "card"(hijo)

        card.className = "cards"//--> Le asigna la calse "cards" a elemento "card"
    }
}

generador(productos)

//----------------------------------------------------------------------------



//Filtrar elementos

let categoria = prompt("Ingrese categoria de producto")//--> Para saber que quiere filtrar el user

let filtroCategoria = productos.filter((parametro) => parametro.categ == categoria)//--> El parametro ".categ"== variable "categpria"

catalogo.innerHTML = ""//--> Limpria  "catalogo" y retorna lo que diga "filtroCategoria"

generador(filtroCategoria)

