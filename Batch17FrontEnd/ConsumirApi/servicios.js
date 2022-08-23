"use strict"

function obtenerDatos() {
    fetch('https://pokeapi.co/api/v2/pokemon/78')
    .then((response) => response.json())
    .then((data)=>{
        const nombre = document.getElementById("nombre");
        nombre.innerHTML = data.name;
    }).catch((err) => {
        console.log("Este es el error: ", err);
    })
}