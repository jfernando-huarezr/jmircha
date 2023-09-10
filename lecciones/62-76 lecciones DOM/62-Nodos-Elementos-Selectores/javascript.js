/*una etiqueta html no se un nodo*/
//mozilla developer network : node.nodetype 12 tipos de nodo.
//no interesan los nodos de tipo elemento y los nodos de tipo texto

//METODOS QUE YA NOSE USAN
console.log(document.getElementsByTagName("li")); //por etiquetas
        //muestra una coleccion html (no es un array)
console.log(document.getElementsByClassName("card")); //por nombre de clase
console.log(document.getElementsByName("nombre")); //por name del formulario


//Este em especifico si se usa, por que a nivel de rendimiento es mas rapido que querySelector
console.log(document.getElementById("menu")); //por ID. Recuerda que son unicos


//han sido reemplazaddos por:

console.log(document.querySelector("#menu")) 
console.log(document.querySelector("a"));

//puedes especificar id, tag o clase
//aca si debes colocar . o # para el id o clase

//solo trae el primer selector del tipo que le hayas especificado que se haya encontrado en el html

//Si quieres traer todos los selectores de un tipo, se usa: 

console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

//el metodo forEach funciona
document.querySelectorAll("a").forEach(el => {
    console.log(el)
})

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));




console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));

console.log(document.querySelector("[name = nombre]"));


//leccion 63 Atributos y Data-attributes

//en una HTML5, en una etiqueta html podemos colocarle atributos propios : data-description, data-xxxxxx

//obtener los atributos
console.log(document.documentElement.lang);
//otra manera
console.log(document.documentElement.getAttribute("lang"));


console.log(document.querySelector(".link-dom").href);console.log(document.querySelector(".link-dom").getAttribute("href"));


//establecer valor a los atributos

document.documentElement.setAttribute("lang", "es");

//empezamos a guardar en variables elementos del DOM
//le ponen dolar adelante, para identificar variables que hacen referencia a elementos de HTML/elementos del DOM (ayuda visual). No es jquery necesariamente
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.youtube.com");

console.log($linkDOM.hasAttribute("rel"));

$linkDOM.removeAttribute("rel"); //quitar atributos

console.log($linkDOM.hasAttribute("rel"));

//para trabajar con los data-atribbutes
console.log($linkDOM.getAttribute("data-description"))

console.log($linkDOM.dataset)
console.log($linkDOM.dataset.description);

$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")

console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "dom dommy dom dom"

console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id"))

$linkDOM.removeAttribute("data-id")

console.log($linkDOM.hasAttribute("data-id"))


/***** LECCION 64 Estilos y Variables CSS********/
//style solo sirve para trabajar en propiedades del documento html. Para trabajar en una hoja de estilo aparte, se usa getComputedStyle

console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))

console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block");;
//notacion con punto
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding ="1rem";
$linkDOM.style.borderRadius = ".5rem";

//variables CSS - Custom Properties
const $html = document.documentElement,
      $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
let white = getComputedStyle($html).getPropertyValue("--white")


console.log(varDarkColor, varYellowColor);


$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//esto esta medio raro, revisarlo bien
$html.style.setProperty("--dark-color", "#000")

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.backgroundColor = varDarkColor;

varWhiteColor = getComputedStyle($html).getPropertyValue("--white");
$body.style.backgroundColor = varWhiteColor;
$body.style.color = "brown";


/*****LECCION 65 DOM CLASES CSS ********/
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);


console.log($card.classList.contains("rotate-45")) //para saber si contiene la clase
$card.classList.add("rotate-45");//para añadir una clase

console.log($card.classList.contains("rotate-45")) 
$card.classList.remove("rotate-45");

console.log($card.classList.contains("rotate-45")) 

$card.classList.toggle("rotate-45") //si no tiene la clase, la agrega
//$card.classList.toggle("rotate-45") //si la tiene, la quita TOGGLE

$card.classList.replace("rotate-45", "rotate-135")

$card.classList.add("opacity-80", "sepia") //para agarrar varias clases
$card.classList.remove("opacity-80", "sepia")

/*****LECCION 66 DOM TEXTO Y HTML ********/
const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
        El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML</p>
    <p> 
        Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS</p>
    <p>
        <mark>El DOM no es parte de la especificacion de Javascript, es una API para los navegadores</p>
    `

    //esta no es parte del estandar
    $whatIsDOM.innerText = text;
    //innerText no toma en cuenta las etiquetas

    $whatIsDOM.textContent = text; //tampoco interpreta las etiquetas html, solo texto
    $whatIsDOM.innerHTML = text; //esta si toma en cuenta las etiquetas html. si lo injecta
    //innerHTML reemplaza EL CONTENIDO y lo reemplaza por la variable



    $whatIsDOM.outerHTML = text; //reemplaza el elemento del DOM por lo que diga la variable

/*****************LECCION 64 : DOM Traversing Recorriendo el DOM**************** */

const $cards = document.querySelector(".cards");
console.log($cards);

//referencia a sus hijos
console.log($cards.children);

//un hijo en particular
console.log($cards.children[2]);

//elemento padre 
console.log($cards.parentElement);

//el nodo padre. este no se usa para los "elemento"
console.log($cards.parentNode);

//obtener primer y ultimo elemento hijo
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

//tambien funciona para los padres
console.log($cards.previousElementSibling); //elemento anterior
console.log($cards.nextElementSibling) //elemento siguiente

console.log($cards.closest("section")); //el elemento que le indico , el ancestro mas cercano, si es que existe


/****************LECCION 68 : Creando Elementos y Fragmentos*************************** */
const $figure = document.createElement("figure"),
      $img = document.createElement("img"),
      $figcaption = document.createElement("figcaption"),
      $figcaptionText = document.createTextNode("Animals"),
      $cartas = document.querySelector(".cards");

      $figure2 = document.createElement("figure")


$img.setAttribute("src","https://picsum.photos/200/200")
$img.setAttribute("alt","Animals")
$figure.classList.add("card")
$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)

$cartas.appendChild($figure)

//otra manera con innerHTML
$figure2.innerHTML= `
    <img src="https://picsum.photos/200/200" alt="People">
    <figcaption>People</figcaption>
`

$figure2.classList.add("card")
$cartas.appendChild($figure2)

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
      $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>")
document.body.appendChild($ul)

estaciones.forEach( el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})

const continentes = ["Africa", "Asia", "Europa", "America", "Oceania", "Antartida"],
      $ul2 = document.createElement("ul");
    
document.write("<h3>Continentes del mundo</h3>")

document.body.appendChild($ul2);

//con inner html
$ul2.innerHTML = '';
continentes.forEach(el => {
    $ul2.innerHTML += `<li>${el}</li>`;
})

//es mejor usar fragmentos en luga de modificar todo el DOM! como a continuacion. Es una manera mas optima

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      $ul3 = document.createElement("ul"),
      $fragment = document.createDocumentFragment(); //es un metodo

meses.forEach ( el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

/****************LECCION 69 : Templates*************************** */
//modelo a seguir en el que estructuras el contenido html que quieras mediante javascript se convierta en dinamico. Forma de poder
//interactuar con el DOM. Se combinan con los fragmentos.
//es una etiqueta que no se visualiza

//seguimos usando $cartas

const $template = document.getElementById("template-card").content,
      $fragment2 = document.createDocumentFragment(),
      cardContent = [
        {
          title: "Tecnología",
          img: "https://picsum.photos/200"
        },
        {
          title: "Animales",
          img: "https://picsum.photos/200"
        },
        {
          title: "Arquitectura",
          img: "https://picsum.photos/200"
        },
        {
          title: "Gente",
          img: "https://picsum.photos/200"
        },
        {
          title: "Naturaleza",
          img: "https://picsum.photos/200"
        },
      ];

cardContent.forEach( el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    
    //tenemos que clonar el $template porque si no ya no lo podemos volver a usar;

    let $clone = document.importNode($template, true); //si le ponemos false solo clona la etiqueta template de inicio y de fin, no lo que esta dentro

    $fragment2.appendChild($clone);
})

$cartas.appendChild($fragment2);

//las etiquetas template no se renderizan en el DOM. solo son como un modelo a usar.


/****************LECCION 70 : Modificando Elementos (Metodo Antiguo)*************************** */

//usamos de nuevo $cartas
const $nuevaTarjeta = document.createElement("figure");

$nuevaTarjeta.innerHTML = `
    <img src="https://picsum.photos/200" alt="Any">
    <figcaption>Any</figcaption>
`;

$nuevaTarjeta.classList.add("card");

//para reemplazar un nodo : nodo nuevo, nodo a reemplazar
    //$cartas.replaceChild($nuevaTarjeta, $cartas.children[2]);

//añadir antes del primer elemento tarjeta
    //$cartas.insertBefore($nuevaTarjeta, $cartas.firstElementChild);

//eliminar el ultimo elemento tarjeta
    //$cartas.removeChild($cartas.lastElementChild);

//para clonar en elementos dinamicos, se usa cloneNode, en lugar de importNode que es para templates.

    const $cloneCards = $cartas.cloneNode(true); //true para clonar TODO el nodo, no solo las etiquetas inicial y final

    document.body.appendChild($cloneCards);

/****************LECCION 71 : Modificando Elementos (Metodo NUEVO)*************************** */

