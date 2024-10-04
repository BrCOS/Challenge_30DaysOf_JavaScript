// every
//it tests to see if every item in an array returns true, based in our condition

const cars = [
    {model: 'Vantage', topSpeed: 230},
    {model: 'Juke', topSpeed: 130},
    {model: '5 Series', topSpeed: 190}
];

const allCarsAreUsable = cars.every((car) => car.topSpeed > 100);
console.log(allCarsAreUsable);//true, because every car has a topSpeed above 100

const allCarsAreFast = car.every((car) => car.topSpeed > 150);
console.log(allCarsAreFast);//false, because not all cars are faster than 150