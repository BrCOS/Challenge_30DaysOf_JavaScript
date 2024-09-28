// loops


// for
//the var will continue to will until loopCounter is less than 6
//each time the lopp completes an iteration the var is increased by 1
//each iteration of the loop will log out the value of the var
for (let loopCounter = 0; loopCounter < 6; loopCounter++) {
    console.log(loopCounter);
}

//we can iterate through an array by using the loop counter as the index of each element

let family = ['Ben', 'Emily', 'Saj', 'Vahid'];

//this way is not recommended because there's a better way to do it by using an array's length
for (let loopCounter = 0; loopCounter < 4; loopCounter++) {
    console.log(family[loopCounter]);
}

//this is better because we don't need to count how many elements are in the array to do the loop
for (let loopCounter = 0; loopCounter < family.length; loopCounter++) {
    console.log(family[loopCounter]);
}


// while
//very similar to for loops, but easier to create an infinite loop
//only used in special situations

let age = 30;

while (age < 100) {
    console.log('Still living');
    age = age + 5;
}


// for of
//the thing with loops is that is kind of hard to make them run the correct number of times
//and off by one errors are more commom than you might think, like this one below
let ages = [4,8,11,20];

for (let counter = 0; counter <= ages.length; counter++) {
    console.log(ages[counter]);//prints 4, 8, 11, 20, undefined
}

//in this particular example the undefined value is appearing because we are using the <=
//so the loop runs one more time, we can just change the operator or use for of loops

for (const age of ages) {
    console.log(age);//prints 4, 8, 11, 20
}

//this is easier to write and also avoids some miestakes because of its simple syntax


// break
//if you want to stop the loop before your stop condition has been met just use break

let ingredients = ['fennel', 'paprika', 'sesame', 'beef'];

const allergy = 'sesame';

for (const ingredient of ingredients) {
    if (allergy === ingredient) {
        break;
    }
    console.log(ingredient);//prints fennel and paprika before stopping
}


// continue
//sounds simple but it can be a little tricky
//we use continue when we want to end the current iteration but carry on with the rest

let otherIngredients = [//this is an array
    {name: 'fennel', vegetarian: true},//this is an object
    {name: 'paprika', vegetarian: true},
    {name: 'sesame', vegetarian: true},
    {name: 'beef', vegetarian: false},
    {name: 'potato', vegetarian: true}
];

for (const ingredient of ingredients) {
    if (ingredient.vegetarian === false) {
        continue;//if it's false, ignore it but keep printing the rest
    }
    console.log(ingredient.name);//prints fennel, paprika sesame and potato
}                                   //basically everything that's true


// functions
//we can create blocks of code, kind of zip'em and re-use them, it's just beatutiful

function myCoolFunction() {
    console.log('Hello');
}


// no input, no return

function pointlessFunction() {
    console.log('I take no input and have no returns');
}

pointlessFunction();


// input, no return
//we pass in an argument so it can be used internally
//the name doesn't matter at all, only the position matters (and the value, must be valid)
//arguments are positional, so its order matter most

function logTemperature(temperature) {
    console.log('The temperature is: ' + temperature);
}

logTemperature(20);


// input, return
//we are using two internal consts and them returning the result which is 125% by the way

function calculateProductivity(cupsOfCoffee) {
    const coffeeFactor = 25;
    const productivity = cupsOfCoffee * coffeeFactor

    return productivity + '% productive'
}

let cupsDrunk = 5;

const productivity = calculateProductivity(cupsDrunk);//var created just to print the function's return
console.log(productivity);


// multiple inputs
//just like the function above, but with more drink options
//we measure the productivity level based on two factors, cups and drink type

function calcProduc(cups, drinkType) {
    const coffeeFactor = 25;
    const teaFactor = 15;
    const energyDrinkFactor = 35;
    let productivity = 4;//if any other paramether is passed, the default of productivity is 4

    if (drinkType === 'coffee') {
        productivity = cups * coffeeFactor;
    } else if (drinkType === 'tea') {
        productivity = cups * teaFactor;
    } else if (drinkType === 'energy') {
        productivity = cups * energyDrinkFactor;
    }
    return productivity + '% productive';
}

let anotherCupsDrunk = 5;

const anotherProductivity = calcProduc(anotherCupsDrunk, 'tea');
console.log(anotherProductivity);


// multiple returns
//it's important to know that in js functions can only return one value and only execute one return
//this will return the statement to exit the function when the if statement is true
//we can return pretty much anything, arrays, objects, you name it

function calcProducMultipleReturns(cups, drinkType) {
    if (drinkType === 'alcoholic') {
        if (cups <= 3) {
            return 20 * cups + '% productive';
        }
        return cups + '% productive';
    }
    if (drinkType === 'coffee') {
        return 25 * cups + '% productive';
    }
    if (drinkType === 'tea') {
        return 15 * cups + '% productive';
    }
    if (drinkType === 'energy') {
        return 35 * cups + '% productive';
    }
    return 4 * cups + '% productive';
}

let cupsDrunkMultipleReturns = 5;

const productivityMultipleReturns = calcProducMultipleReturns(cupsDrunkMultipleReturns, 'tea');
console.log(productivityMultipleReturns);


// positional arguments
//as we know, function arguments are positional in js, which means that the order matter
//and there is no other way to identify which input relates to which argument

function coolestFunction(arg1, arg2) {//arg1 is expect to be a number and arg2 to be a string
    const result = arg1 - 5;
    const uppercased = arg2.toUpperCase();
}

//by default the function will try to use the arguments only in a way they are designed for


// default arguments
//we can assign default values to the arguments

function anotherCoolestFunction(arg1 = 6, arg2 = 'Hello') {
    const result = arg1 - 5;
    const uppercased = arg2.toUpperCase();

    console.log(result);
    console.log(uppercased);
}

//we can call this function without any, just one or both arguments

anotherCoolestFunction();
anotherCoolestFunction(10);
anotherCoolestFunction(10, 'all the code');

//because arguments are positional, we can't skip the first argument for the second one
//so, put one value, two or none


// arrow functions

const functionName = (arg1, arg2) => {
    console.log(arg1, arg2);
}

//another example

const functionSayHello = () => {
    console.log('Hello');
}

const functionSpeakLouder = (text) => {
    console.log(text.toUpperCase());
}


// function as inputs
//functions can be passed around like vars, objects etc...
//so, we can actually make a function that takes another function as it's input

const loggingFunction = (inputFunction, value1, value2) => {
    console.log('Executing input function');
    inputFunction(value1, value2);
    console.log('Executed input function');
}

const addNumbers = (a, b) => {
    console.log(a + b);
}

loggingFunction(addNumbers, 4, 5);


// anonymous functions
//functions can actually exist without a name
//we'll rewrite the function above:

const loggingFunction2 = (inputFunction, value1, value2) => {
    console.log('Executing input function');
    inputFunction(value1, value2);
    console.log('Executed input function');
}

loggingFunction2((a, b) => console.log(a + b), 5, 9);