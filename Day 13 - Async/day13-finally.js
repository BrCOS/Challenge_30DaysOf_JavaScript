// finally
//just like try/catch/fianlly we also have a .finally() here to deal with promises

const pokeApi = 'https://pokeapi.co/api/v2/pokemon/buizel';

let loading = true;
console.log(loading);

fetch(pokeApi).then((res) => res.json()).then((data) => {
    console.log(data);
}).catch((err) => console.log(err.message)).finally(() => {
    loading = false;
    console.log(loading);
});

//this will print 'true' first, then the api data and then 'false' as we set it to do