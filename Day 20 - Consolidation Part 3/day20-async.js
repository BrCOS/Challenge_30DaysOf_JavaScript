// async
//allow us to handle code and requests that have delays without locking things up
//requesting data from an API, takes time, it could happen in ms or seconds
//in js we can wrap up that code in a promise that will be executed after the delay is over
//and while the delay isn't over, js will keep running other parts of the code

console.log('Time 1');

let pokeApi = 'https://pokeapi.co/api/v2/pokemon/buizel';

fetch(pokeApi).then((res) => console.log('Done'));

console.log('Time 2');
//Time 1
//Time 2
//Done

// promise chaining
//it allow us to chain together multiple async calls, by making sure that it all be called in the correct order
//fetch() returns a promise and we can access the fetch()'s result in the .then whenever the response is ready
//while this happens, the rest of our js code will be executed without a problem
//the data from the first .then() is accessed with another promise res.json()
//so, to actually access the data from the api, we need to call return res.json() promse and then access the result
//of that with another .then() which gives us the actual data

fetch(pokeApi).then((res) => res.json()).then((data) => console.log(data));


// erros
//displays an error with the network because we are passed in the wrong url
//it doesn't matter how many chain promises (.then()'s) we have, just one catch at the end is needed to handle the error

pokeApi = 'http://wrongAddressss.cool';

fetch(pokeApi).then((res) => res.json()).catch((err) => console.log(err.message));
//NetworkError when attempting to fetch resource


// finally
//will run to clean up code at the end regardless if the promise chain ended successfully or by the catch

pokeApi = 'https://pokeapi.co/api/v2/pokemon/buizel';

let loading = true;
console.log(true);

fetch(pokeApi).then((res) => res.json()).then((data) => {
    console.log(data);
}).catch((err) => console.log(err.message)).finally(() => {
    loading = false;
    console.log(loading);
});


// async/await
//all these .then() is making things hard to read, so we can write async code to help with that
//we have our promise based code above
//and below there is our async/await code equivalent

try {
    const response = await fetch(pokeApi);
    const data = await response.json();

    console.log(data);

} catch (err) {
    console.log('There was an error: ', err.message);
    
} finally {
    loading = false;
}