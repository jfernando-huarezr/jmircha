import saludar, {Saludar, PI, usuario} from "./constantes.js"
import {aritmetica as calculos} from "./aritmetica.js";

console.log("archivo modulo.js");

console.log(PI, usuario);

//console.log(aritmetica.sumar(3,1));
console.log(calculos.sumar(3,1));  //usando alias! aritmetica as calcular;

saludar();

let saludo = new Saludar();
saludo;

//baia baia asi que aqui salia lo de React!