// Nos permite crear nuestros propios eventos
const EventEmitter = require("events");
const emitter = new EventEmitter();

// muy parecido a un EventEmitter
// Definir las reglas del evento
// Si el evento tal ocurre, se ejecuta este
emitter.on("saludar", (args) => {
    console.log('Hola ' + args.nombre);
});

emitter.emit("saludar", {
    edad: 20,
    nombre: "Flor"
})