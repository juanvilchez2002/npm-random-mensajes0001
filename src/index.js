//creando una variable de arreglo para enviar los mensajes
const messages = [
    "Oscar",
    "Ana",
    "Nicolay",
    "Yessica",
    "Diego",
    "Laura"
];

//crear una función para enviar aleatoriamente los nombres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

//exportar como un modulo
module.exports = {randomMsg}
