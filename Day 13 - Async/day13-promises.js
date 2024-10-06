// promises
//is a special type of function in js that can be executed later
//in a way is like, go do this and when it's done come back and let me know so we can move on

//we'll use this most of the time to fetch data from another web service
console.log('Time 1');

const pokeApi = 'https://pokeapi.co/api/v2/pokemon/buizel';//pokemon api

fetch(pokeApi).then((res) => console.log('Done!'));
//fetch is a function provided by the browser to let us request data from other web services

console.log('Time 2');

//there will be a delay sending the request and getting the response back
//that's why Time 1 and 2 will be printed first before the data

//the fetch() uses Promises to return data later (when the data is ready)
//without interrupting the js code flow

//we use .then() to execute the code we want after fetch() has done its job
//.then() wants a function to execute when it's ready, and in this case
//it takes one argument which is the response from the URL that fetch() called

//we are not printing the response (res) yet because it returns a big object
//which is a JSON, but we shall see it further on how to deal with them, so we are
//just printing done for the time being