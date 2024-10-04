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