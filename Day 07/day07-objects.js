// objects
//pretty much it all in js are objects, strings, array, functions, you name it
//we can use objects to store and structure our data
//each thing we store in an object is given a key we can use to refer back to later
//this keys are are called properties and we can nest them as deep as we can, we also
//can store other objects on these properties

const myNewObject = { keyName: 'value for this key'};

const myBigNewObject = {
    keyName: 'value for this key',
    objectKey: {
        name: 'Object Name',
        domain: 'Object Domain'
    },
};

//the only thing necessary is that the variable name must be valid
//we can access all its properties with a simple .syntax

let laptopSpecs = {
    screenSize: 16,
    name: 'MacBook Pro',
    processor: 'M1',
    ram: 32,
    storage: 1
};

console.log(laptopSpecs.screenSize);
console.log(laptopSpecs.name);

//we can access an object key dinamically

let userInput = 'screenSize';
console.log(laptopSpecs[userInput]);

userInput = 'name';
console.log(laptopSpecs[userInput]);

//this works because we can also access an object property with
//myBigObject['name'];