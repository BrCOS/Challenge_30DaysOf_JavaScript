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