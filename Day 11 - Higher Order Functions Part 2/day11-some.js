// some
//not used very much
//it will search the array and find one item that match our condition
//if one item is found it will return true, if not it won't

const cars = [
    {model: 'Vantage', topSpeed: 230},
    {model: 'Juke', topSpeed: 130},
    {model: '5 Series', topSpeed: 190}
];

const haveFastCar = cars.some((car) => car.topSpeed > 140);
console.log(haveFastCar);//true

const haveReallyFastCar = cars.some((car) => car.topSpeed > 250);
console.log(haveReallyFastCar);//false