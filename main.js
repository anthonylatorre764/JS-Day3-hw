console.log('testing')

// Using what we learned in class, create a mockup of a Pokedex.. when you 
// enter a Pokemon name, it should make an API call and get all the data.. 
// then display some of that information to your html page
// (couple of pokemon names to try: "ditto", "pikachu", "charizard")


// Features should include:
// -name
// -image(hint: the path to the image is 'sprites' -> 'front_default')


// Extra credit: List out all the pokemon's abilities


// let getUserInput = (event) => {
    
// }



let getUserInput = (event) => {
    event.preventDefault()
    const name = theForm[0].value
    console.log(name)
    pokemonData(name)
}


const theForm = document.getElementsByTagName('form')[0]
console.log(theForm)
theForm.addEventListener('submit', getUserInput)



const pokemonBox = document.getElementById('pokemon_container')


const pokemonData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)
    pokemonBox.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p></p>
            <p class="card-text">First Ability:</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${data.abilities[0].ability.name}</li>
        </ul>
    </div>
    `
}

