// localstorage
//let's us save data in a key/value store to get back later


// saving data to LocalStorage
//localStorage.setItem();
//data is saved as string, some complex data needs to go through JSON.stringify when saved
let numbers = [3, 5, 7, 22, 4, 1];

localStorage.setItem('numbers', JSON.stringify(numbers));


// fetch data from LocalStorage
//localStorage.getItem();
//if the data was through JSON.stringify() we need to run it back through JSON.parse()
let numberString = localStorage.getItem('numbers');
let numbers2 = JSON.parse(numberString);
//if the data doens't exist, we will get a null, so we do
let numbersNotNull = JSON.parse(numberString) ?? [];//if there is nothing in the left, return what's on the right


// editing data in LocalStorage
//we can't directly edit it
//but we can read it, make the changes and write it back to LocalStorage


// deleting data from LocalStorage
//localStorage.removeItem();
localStorage.removeItem('numbers');
//or get rid of everything
localStorage.clear();