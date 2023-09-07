export const PI = Math.PI;

export let usuario = "Fernando";

let password = "qwerty";
//export default password;

//primero tengo que expresar y luego puedo hacer el export default, si no no funciona
// se puede hacer export defaulta con funcion declaradas y clases

const hello = () => {
    console.log("hola");
}

export default function saludar(){ 
    console.log("Hola modulos ES6")
}
//solo puede haber un default

export class Saludar{
    constructor(){
        console.log("Hola Clases Modulos de ES6");
    }
}
