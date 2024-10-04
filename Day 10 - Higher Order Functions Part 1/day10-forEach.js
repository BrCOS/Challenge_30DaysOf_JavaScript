// forEach
//there are 3 concepts that we need to keep in mind right now
//arrays are objects in js, which means that it has properties we can call
//objects have functions stored as property and they are callable
//functions can take other functions as inputs and they can be anonymous

let ages = [22, 45, 12, 6];

ages.forEach((age) => {
    console.log(age);
});

//we are iterating that array woth this function

//ages.eachFor() is a function that exists on all arrays
//it takes a function that takes a function as its first input

//we can break it out as a true function and use as many forEach we'd like

let words = ['All', 'the', 'code'];

const printThing = (thing) => {
    console.log(thing);
}

words.forEach(printThing);

printThing('Hello World');

//forEach is a hiher order function that only exists to take another
//function and run it for each item of an array