// D.O.M = Modelo de Objetos del Documento: Estructura generada por el navegador que representa la pagina HTML. 

//Etiquet(HTML) = Nodo(JS)
//Nodos: Padres, hijos y de texto




// Acceso a Nodos

//.getElementById() : Accede al nodo con #ID 

let catalogo = document.getElementById("catalogo")

console.log (catalogo) //--> Mostramos var. cat

//.getElementsByClassName(): Accede al los nodos con .clases en comun. Retornara un --ARRAY--

let cards = document.getElementsByClassName ("cards")

console.log (cards)



// Edicion de nodos

//---.innerText---: Muestra y modifica el contenido de texto de un nodo (pisa el contenido del html y css por efecto de cascada)

let divTexto = document.getElementById ("texto")

let nombre = prompt ("Ingrese su nombre")

divTexto.innerText = "Bienvenido "+ nombre//-->Modifica el texto de #texto

console.log (divTexto.innerText)  //-->Muestra soalmente el contenido de texto de #texto

//---.innerHTML---: Modifica y crea el codigo + el contenido de un nodo

let nodoALlenar = document.getElementById("noContieneNada")

nodoALlenar.innerHTML = "<h2><p>Este div estaba vacio, ahora contiene un 'h2' y un 'p' gracias a la propiedad '.innerHTML'"//No hace falta poner etiqueta de cierre