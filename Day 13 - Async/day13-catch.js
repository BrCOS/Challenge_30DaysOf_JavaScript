// catch
//just like the try/catch thing we learned the other day
//but this one is written in a way that we can chain into promises

const wrongPokeApi = 'http://wrongAddressss.cool';

fetch(wrongPokeApi).then((res) => res.json()).catch((err) => console.log(err.message));//'NetworkError when attempting to fetch resource.'

//we only need one .catch() to catch all errors in the full chain

fecth(wrongPokeApi).then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err.message));

//just like the try/catch block, .catch() just skips all the code after an error is catch

//using the right api url with catch:

const pokeApi = 'https://pokeapi.co/api/v2/pokemon/buizel';

fetch(pokeApi).then((res) => res.json()).then((data) => {
    console.log(data);
    throw new Error ('Throwing an error just for the fun of it');
}).catch((err) => console.log(err.message));

//we are throwing an error just to show that the .catch() will catch it no matter where it is thrown
//there's nothing wrong with this code, the .catch() just shows the error message because we explicitly
//are instanciating an error message with throw new Error, that's whats triggering the .catch()