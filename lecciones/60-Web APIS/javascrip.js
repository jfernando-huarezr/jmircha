//interfaz de programacion de aplicaciones. El DOM es una API!

//DOM Document Object Model. Manipulacion de HTML mediante Javascript

//CSSOM CSS Object Model. manipulacion CSS mediante Javascript

//api speech synthesis
console.log(window);
console.log(document);

let texto = "Hola soy Fernando"
const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

hablar(texto); //habla!