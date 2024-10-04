// find
//similar to the filter, but return the first item in the array that matches our condition
//if the item can't be found it will return undefined

const cars = [
    {model: 'Vantage', topSpeed: 230},
    {model: 'Juke', topSpeed: 130},
    {model: '5 Series', topSpeed: 190}
];

const car = cars.find((car) => car.model === 'Juke');

console.log(car);//{model: 'Juke', topSpeed: 130}