"use strict";

const url1 = "https://pokeapi.co/api/v2/pokemon/60";

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error ", error);
    });
}

const data = getData(url1);
console.log('Resultado correcto.- ', data);
