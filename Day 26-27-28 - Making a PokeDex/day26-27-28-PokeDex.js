//load the pokemon list from the api
const baseAPI = 'https://pokeapi.co/api/v2/';

//DOM elements
const flexContainer = document.getElementById('flex-container');
const placeholder = document.getElementById('placeholder');

//pagination, we store the page number we are on
//so we can increase it to load more pokemons
let page = 0;

//clones the first node and changes the placeholder with each pokemon's information we are gettin from the json
const addCard = (pokemon) => {
    const newCard = placeholder.cloneNode(true);
    const loadingSpinner = newCard.querySelector('.lds-ring');

    loadingSpinner.remove();

    const title = newCard.querySelector('.title');
    title.innerText = pokemon.name;

    const image = newCard.querySelector('.img');
    image.src = pokemon.sprites.front_default;

    newCard.id = pokemon.id;

    flexContainer.appendChild(newCard);
};

//event handler on 'Show More'
const nextPage = () => {
    //remove the hidden class from the first card so when we copy it the hidden class doesn't come along
    placeholder.classList.remove('hidden');
    page++;
    getPokemonList();
};

//function to fetch the data from the API
const getPokemonList = () => {
    //gets more pokemon pages (pagination)
    fetch(`${baseAPI}pokemon?limit=20&offset=${page * 20}`)
    .then((res) => res.json())
    .then((data) => {
        const fetchedPokemon = data.results;

        //Promise.all(), takes an array of promises and returns a single promise
        //use map() because we call fetch() on each pokemon's url, save and return fetch() into an array (the res)
        const requests = fetchedPokemon.map((pokemon) => {
            return fetch(pokemon.url)
            .then((res) => res.json())
            .then((data) => {
                addCard(data);
            });
        });

        return Promise.all(requests);
    })
    .finally(() => {
        placeholder.classList.add('hidden');
    });
};

getPokemonList();
