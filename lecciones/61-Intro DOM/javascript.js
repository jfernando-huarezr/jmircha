//conceptos importantes
console.log("*****elementos del documento******")

//el contexto global es window. Lo que nos importa ahora es usar el document
console.log(window.document)

//no es necesario poner window siempre

console.log(document.head);
console.log(document.body);

//no funciona con la etiqueta html
console.log(document.html);

//funciona con document.documentElement
console.log(document.documentElement);

//otros
console.log(document.doctype);
console.log(document.title);
console.log(document.links);
console.log(document.forms);
console.log(document.images);
console.log(document.styleSheets);
console.log(document.scripts);


setTimeout(()=> {
    console.log(document.getSelection().toString()); //aparece el texto que seleccione en la pagina
}, 3000);

document.write("<h2>Hola amiguitos</h2>");

