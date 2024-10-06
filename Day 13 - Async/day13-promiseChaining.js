// promise chaining
//we can chain multiple .then() together when we need to do one thing after the other that are asynchronous

//const pokeApi = 'https://pokeapi.co/api/v2/pokemon/buizel';
//fetch(pokeApi).then((res) => console.log('Done!'));

//the data from the API is stored in the res object, but we can't access it like a normal object
//fetch() will let us access that data by another promise, and to do that we will need to chain multiple .then()

const pokeApi = 'https://pokeapi.co/api/v2/pokemon/buizel';
fetch(pokeApi).then((res) => res.json()).then((data) => console.log(data));

//in the first .then() function we are calling .json() on the res object, this is a function that asynchronously
//gets the data that was sent to us in the response (res) and turns it into a JSON object
//this returns a promise, just like the fetch() function

//we are inside a .then() when calling that promise we can simply return it and then add a new .then() on
//to access the result of the .json() promise

//this console.log(data) part of the code is printing the API data in a JSON format

//there is no limit on how many .then() we can chain together, we just need to keep in mind that
//each one needs to return a promise to the next .then() has a promise to work on

//the res.json() returns a promise but there is no network request like there is with fetch()
//accessing the data in res with res.json() is done with a promise, this happen because of the way
//the data is being received and temporaraly stored

//.then() is the only thing we can do with the result of a promise