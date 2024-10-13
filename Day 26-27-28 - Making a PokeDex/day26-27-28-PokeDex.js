//load the pokemon list from the api
const baseAPI = 'https://pokeapi.co/api/v2/';

//DOM elements
const flexContainer = document.getElementById('flex-container');
const placeholder = document.getElementById('placeholder');
const totalPokemon = document.getElementById('total-pokemon');
const modalBackdrop = document.getElementById('backdrop');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');

//pagination, we store the page number we are on
//so we can increase it to load more pokemons
let page = 0;

//we need to store the data instead of refetching it
//so we'll store the data we already requested in this array so we can grab it from here when we need it
let pokemonArray = [];

//modal = popup with pokemon's more info
//the data is coming from the array
//we get the pokemon id from the pokemonArray
const showModal = (pokemonId) => {
    //use .find() to find the pokemon's id in the array
    const foundPokemon = pokemonArray.find((p) => p.id === pokemonId);

    modalTitle.innerText = foundPokemon.name;
    modalImage.src = foundPokemon.sprites.front_default;
    modalBackdrop.classList.remove('hidden');
};

const addCard = (pokemon) => {
    const newCard = placeholder.cloneNode(true);
    const loadingSpinner = newCard.querySelector('.lds-ring');

    loadingSpinner.remove();

    const title = newCard.querySelector('.title');
    title.innerText = pokemon.name;

    const image = newCard.querySelector('img');
    image.src = pokemon.sprites.front_default;
  
    const typesDiv = newCard.querySelector('.types');
    const types = pokemon.types.map((type) => type.type.name);
    //we need to create a string for the types, since it'll come in an array with more information
    //we use map to create an array like ['grass', 'poison'] and then join to create a string that we can pass to the DOM
    typesDiv.innerText = types.join(', ');

    const weightDiv = newCard.querySelector('.weight');
    weightDiv.innerText = `${pokemon.weight} kg`;

    newCard.id = pokemon.id;

    newCard.onclick = () => showModal(pokemon.id);

    flexContainer.appendChild(newCard);
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

                //passes the pokemons we fetched to the empty array we created above
                pokemonArray.push(data);
                console.log(pokemonArray);
                addCard(data);
            });
        });
        
        return Promise.all(requests);
    })
    .finally(() => {
        placeholder.classList.add('hidden');
    });
};

//placeholder at the bottom of the list
//to make it work, first remove it from the DOM and re-add it again
const showAndMovePlaceholder = () => {
    placeholder.classList.remove('hidden');
    placeholder.remove();
    flexContainer.appendChild(placeholder);
};

//event handler on 'Show More'
const nextPage = () => {
    //remove the hidden class from the first card so when we copy it the hidden class doesn't come along
    showAndMovePlaceholder();
    page++;
    getPokemonList();
    //number at the bottom of the page
    totalPokemon.innerText = (page + 1) * 20;
};

//when clicking in the backgroud dismisses the modal
//clicking inside, doens't dismisses the modal
const dismissModal = (e) => {
    console.log('here');

    //if we don't check like this, by clicking in any child of backdrop's node will cause the event to fire
    //because modal is a child of backdrop, the event that caused the event handler to fire is the same that the
    //event handler is actually attached to, that's why we need to check it like this
    if (e.currentTarget === e.target) {
        modalBackdrop.classList.add('hidden');
    }
  
};

//dismiss modal event handler
modalBackdrop.onclick = dismissModal;

getPokemonList();