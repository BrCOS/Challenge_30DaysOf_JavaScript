// == vs ===

// it's recommended to always use === instead

// == means mostly equals to and === means 100% equals to

// if statements

const happy = true;

if (happy === true) { //we can change it to if (true), because the if statement only cares
    console.log('Happy'); //about the final result of what's inside of the parentheses
}

if (happy === false) {
    console.log('Not Happy');
}

const temperature = 28;

if (temperature > 28) {
    console.log('Too Hot');
}

if (temperature <= 28) {
    console.log('Just Right');
}


// and operator
//this operator will first evaluate if the first statement is true then if the second one is true
//only returns true when all statements are true, if not the whole condition is false

if (temperature > 28) {
    console.log('Too Hot');
}

if (temperature > 15 && temperature <= 28) { //the and operator will only return true if both
    console.log('Just Right');                  //statements are true
}

if (temperature <= 15) {
    console.log('Too Cold');
}

//if just one statement is false, the and operator will return false, like evertyhing inside
//parentheses is false, no matter how many && operator you may have


// or operator
//returns true if any of the statements are true

const knowsJS = true;
const knowsPy = false;

if (knowsJS === true || knowsPy === true) {
    console.log('This is a dev team!') // returns true because one knows JS but not Python,                   
}                                       //so, at least one statement is true, therefore everything is true

//another way to do this or operator when dealing with booleans type, such as the ones declared above
if (knowsJS || knowsPy) {
    console.log('This is a dev team'); //returns true, same explanation but the code is implicity
}


// if else statements
//if has an counterpart called else, which will run in case the statement is false
//let's rewrite our first code of the day using else and more stuff that we learned today

if (happy) { //here, we can use the implicity code, because we are dealing with a boolean type
    console.log('Happy');
} else { //the else block doesn't need a condition between parantheses, because it will run when
    console.log('Not Happy') //the if condition is false
}

//just remember, it can be an if without an else, but that can't be an else without an if


// if, else if, else statements
//the if else statements only works when we have a conditional that's true and another one that's false
//now, if we have more things to check, we have to use else if statements with the if statement

if (temperature < 10) {
    console.log('Cold');
} else if (temperature < 20) {
    console.log('Comfortable');
} else if (temperature < 30) {
    console.log('Hot');
} else {
    console.log('Very Hot');
}