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

let cupsDrunk = 5;

const productivity = calcProduc(cupsDrunk, 'tea');
console.log(productivity);