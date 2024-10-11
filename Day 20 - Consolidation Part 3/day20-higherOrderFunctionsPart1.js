// higher order functions
//arrays are objects in js so we can call other properties on then
//objects have functions stored as a property
//functions can take other functions as input and they can be anonymous

const ages = [12, 3, 7, 33, 23, 68, 7, 44];

// forEach
//iterates over an array, also allows us to run a function for each item in the array
ages.forEach((age) => {
    console.log(age);
});


// sort
//sorts an array by iterating over them, compares against each other and returns sorted ascending or descending
const sortedAges = ages.sort((a, b) => a - b);
//if we do like this: ages.sort((a, b) => b - a) it will be sprted the other way

console.log(ages);
console.log(sortedAges);

//we can sort anything we want, arrays of strings, objects...
//as long as we can get a calcualtion that gives us a negative or positive number

const strings = ['Simon', 'David', 'Sara', 'Rita'];

const sortedStrings = strings.sort((a, b) => a.length - b.length);
console.log(sortedStrings);

//object properties
const cars = [
    {model: 'Vantage', topSpeed: 230},
    {model: 'Juke', topSpeed: 130},
    {model: '5 Series', topSpeed: 190}

];

const sortedCars = cars.sort((a, b) => a.topSpeed - b.topSpeed);
console.log(sortedCars);


// map
//used to transform and change array elements

const names = ['Harry', 'ron', 'Hermione', 'ginny'];

const uppercased = names.map((name) => name.toUpperCase());
console.log(uppercased);//HARRY, RON, HERMIONE, GINNY


// filter
//creates a new array by filtering another array
//we give it a function that iterates over the array, and if we want to keep an item return true

const over18 = ages.filter((age) => age > 18);
console.log(over18);//33, 23, 68, 44

//this will always return an array, even if returns nothing, we will get an empty array


// find
//gives us an array of one item back, will give the first item found in an array
//when there's no returns we will get an undefined
const over20 = ages.find((age) => age > 20);//gets us the first person over 20
console.log(over20);//33