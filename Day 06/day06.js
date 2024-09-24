// default arguments
//function's arguments are positional and when calling a function we need to pass the arguments in the same
//order that we created them in the function, otherwise it may display a different result than we are expecting

//the order and position of the arguments matter

//we can make an argument sort of opcional

function showPositions(firstArg, secondArg, thirdArg, optinalArg = '4') {//basically we are passing a default value
    console.log(firstArg);                                               //to rhe optionalArg that if it doens't gets
    console.log(secondArg);                                              //value, it will just use the one we passed
    console.log(thirdArg);
    console.log(optinalArg);
}

console.log('Without optional');
showPositions('1', '2', '3'); //will print: 1, 2, 3, 4

console.log('With optional');
showPositions('1', '2', '3', 'Hello');//will print just that


// arrow functions
//is just another way to declare a function, it has a shorter syntax

const functionName = (arg1, arg2, arg3) => {//it uses =>, so the name is because of that
    return someValue;
}

//also, that function lives in a variable, so we can actually pass it around just like a const

//let's make an arrow function for yesterday's function

const convertMeasurement = (measurement, unit) => {
    if (unit === 'cm') {
        return measurement / 2.54;
    } else {
        return measurement * 2.54;
    }
}

const length = 5;

const cmLength = convertMeasurement(length, 'inches');

console.log(cmLength); //works just like the previous one

//the difference is that this function is scoped, which means it's more portable
//it solved some problems when it was added later to the language


// functions as inputs
//this is kind of mind-blowing, but yeah:
const addNumbers = (num1, num2) => {
    return num1 + num2;
}
  
const logInOut = (in1, in2, action) => {
    console.log('in1: ' + in1);
    console.log('in2: ' + in2);
  
    const result = action(in1, in2);
    console.log('result: ' + result);

    return result;
}
  
const converted = logInOut(10, 2, addNumbers);

//well, as we can see here, we created a function called addNumbers
//however, we only call it once, on the last line, when we pass two other arguments
//the function logInOut takes another function as a parameter (action)
//and only knows what function it is when we pass it to it on the last line
//we can then print the numbers (num1, num2) as in1 and in2
//the function returns the sum of the numbers, which we also print as the result


// anonymous functions
//functions are created with a syntax then assigned to a storage place with the
//function kewyword or with a const, since creating a function and storing one
//are two separeted whings we can create an anonymous function

//so, if we want to use the function above as an example:

const logInOutAgain = (in1, in2, action) => {
    console.log('in1: ' + in1);
    console.log('in2: ' + in2);
  
    const result = action(in1, in2);
    console.log('result: ' + result);

    return result;
}

const convertedAgain = logInOutAgain(10, 2,
    (num1, num2) => {
        return num1 + num2;
    }
);

//notice that we got rid of the addNumbers function and just create one
//that does the same thing on the spot and passed it as an argument (action)
//we could have written that in just one line of code, but this way it's easier to visualize