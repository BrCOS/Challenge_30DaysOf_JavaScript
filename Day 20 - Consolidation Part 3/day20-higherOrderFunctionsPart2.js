// higher order functions

// findIndex
//will give us the index of the first element found in the array

const cars = [
    {model: 'Vantage', topSpeed: 230},
    {model: 'Juke', topSpeed: 130},
    {model: '5 Series', topSpeed: 190}

];

const index = cars.findIndex((car) => car.model === 'Juke');
console.log(index);//1
//if it can't find any item, it will return -1


//some
//kind of like find and findIndex, but it will return true or false

//check if we have any car with a top speed of over 140
const haveFastCar = cars.some((car) => car.topSpeed > 140);
console.log(haveFastCar);//true

const haveReallyFastCar = cars.some((car) => car.topSpeed > 250);
console.log(haveReallyFastCar);//false


// every
//kind of like some, but this one tells us every element matches our condition
//so, if it all is true will return true

const allCarsAreUsable = cars.every((car) => car.topSpeed > 100);
console.log(allCarsAreUsable);//true

const allCarsAreFast = caes.every((car) => car.topSpeed > 150);
console.log(allCarsAreFast);//false


//reduce
//apply a function to every element in an array, returns a value and then pass that value into
//the next iteration of that function
//for example, let's take this list: 1, 2, 3, 4, 5 and sum them up with reduce starting with 0
//so, 0 + 1 = 1, returns 1
//1 + 2 = 3, returns 3
//3 + 3 = 6 -> 6 + 4 = 10 -> 10 + 5 = 15
//so we get 15 as the result, that is what reduce does
//so, basically it takes an array and turns into one item
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((runningTotal, number) => {
    return runningTotal + number;
}, 0);

console.log(total);

//we can use reduce to transform an array of objects


// reduceRight
//kind of ike reduce but starts at the end and works backwards