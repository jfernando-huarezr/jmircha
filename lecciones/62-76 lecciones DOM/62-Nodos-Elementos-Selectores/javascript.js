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


//leccion 64 Estilos y Variables CSS
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


console.log(varDarkColor, varYellowColor);


$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

//esto esta medio raro, revisarlo bien
$html.style.setProperty("--dark-color", "#000")

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.backgroundColor = varDarkColor;