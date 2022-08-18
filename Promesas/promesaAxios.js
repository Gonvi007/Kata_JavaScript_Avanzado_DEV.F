"use strict"

const axios = require("axios");

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/60";

axios.get(urlPokemon)
.then((respomse) => {
    console.log(response.data);
})
.catch((err) => {
    console.log(err);
});