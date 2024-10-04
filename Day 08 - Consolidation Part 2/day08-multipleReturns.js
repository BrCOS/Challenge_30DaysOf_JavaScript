// multiple returns
//it's important to know that in js functions can only return one value and only execute one return
//this will return the statement to exit the function when the if statement is true
//we can return pretty much anything, arrays, objects, you name it

function calcProduc(cups, drinkType) {
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

let cupsDrunk = 5;

const productivity = calcProduc(cupsDrunk, 'tea');
console.log(productivity);