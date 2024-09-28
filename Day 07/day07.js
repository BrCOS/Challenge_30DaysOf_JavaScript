// consts and vars

const pi = 3.14; //we use consts for data that never changes

var age = 21; //use vars for data that can change

let age = 21; //but it's more recommended to use let instead of var
                //mostly because it keep things locally scoped


// strings
//just like everything in js, strings are objects and they have functions
//who are known as methods, that we can call

const myString = '   Hello World   ';

const lowerCased = myString.toLowerCase();
const removeWhiteSpaces = myString.trim();
const manyStrings = myString.repeat(4);
const stringLength = myString.length;//the only method that it's not a function
//but rather a property to be read, like if it was a value, which if you think
//about it kind of is, like, the value of the length


// boolean
//are true or false
//used for comparison operations or to just flag something, like true or false or just on or off

let greaterThan = 4 > 3;
let lessThan = 3 < 4;
let greaterThanEqualTo = 4 >= 3;
let equalTo = 3 == 3;
let notEqualTo = 3 != 4;
let exaclyEqualTo = 3 === 3;


// == vs ===
//basically === is just better because it checks if everything is exactly the same
//even data type and content, so if you want something exatcly the same as the other
//just use ===, now if tou want something the same but not really use the ==


// collection types


// arrays
//are used to store a list of items

const weights = [12, 55, 98];
const cities = ['London', 'Paris', 'Bangkok'];

//we can mix types in arrays but it's not recommended
//we access an array value by its index

console.log(cities[0])//prints London

//it has its methods too

console.log(cities.length);//prints 3


// sets
//just like arrays but each value must be unique
//[1, 2, 3, 3, 3, 4]; is a valid array but not a valid set

//we can't access a set element by its index, first we have convert it into an array

let ages = [24, 12, 78, 37, 12];//array

let agesSet = new Set([24, 12, 78, 37, 12])//set
//let agesSet = new Set(ages); //another way to create an set

//a nice thing about sets is that it can be used deduplicate an array
//basically it elimitades repeated values from the set

let agesDedupe = Array.from(agesSet);

console.log(agesDedupe);//will print it all except the values that are repeated
//[24, 12, 78, 37]


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


// maps
//these are objects with extra-steps
//maps have some extra functionality over an object
//so we can't access it the same way we'd an object
//we have to use .get('keyName'); and .set('keyName');

const aboutMe = new Map(); //that's how a map is created
aboutMe.set('name', 'Bruno');
aboutMe.get('name');
console.log(aboutMe.get('name'));


// logic


// if
//conditional that allow us to control which part of the code will be executed
//based on determined situations that we create

const happy = true;

if (happy === true) {//we use operators to determine if a condiiton is true or false
    console.log('Is Happy');//and then based on that we execute or not the code
}


// and
//we use and to check multiple statments

const temperature = 28;

if (temperature > 28) {
    console.log('Too Hot');
}

if (temperature > 15 && temperature <= 28) {//all the conditions must be true so it can return true
    console.log('Just Right');
}

if (temperature <= 15) {
    console.log('Too Cold');
}


// or
//one or more conditions must be true so it can return true

const knowsJs = true;
const knowsPy = false;

if (knowsPy === true || knowsJs === true) {//just one is true but it returns true
    console.log('They are a Dev');
}


// if else
//to avoid problems like the one above

const codeOneHappy = true;
const codeTwoHappy = false;
const codeThreeHappy = true;

if (codeOneHappy && codeTwoHappy && codeThreeHappy) {
    console.log('All coders are happy');
} else {
    console.log('Not all coders are happy');
}


// if, else if, else
//when we have more statements to check we use this

let temp = 8;

if (temp < 10) {
    console.log('Cold');
} else if (temp < 20) {
    console.log('Comfortable');
} else if (temp < 30) {
    console.log('Hot');
} else {
    console.log('Very hot');
}