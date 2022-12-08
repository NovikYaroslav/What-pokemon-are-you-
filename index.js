const button = document.querySelector(".pokebutton");
const result = document.querySelector(".result")
const image = document.querySelector(".sprite")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function showMyPokemon() {
 const randomPokemon =  getRandomInt(10)
 if (randomPokemon == 3) {
    result.textContent = `You Hasbik!`
    image.src = "./hasbulla-hasbi.gif"
 } 
 else {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.sprites.front_shiny)
        const pokemonName = data.name
        const UpperPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
        result.textContent = `You ${UpperPokemonName}`
        image.src = data.sprites.front_shiny
        image.classList.add("sprite_visible")

    })
 }

}

button.addEventListener("click", showMyPokemon);
