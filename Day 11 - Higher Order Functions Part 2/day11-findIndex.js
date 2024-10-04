// findIndex
//just like find, will search for the first element in the array
//that matches our condition and then return its index

const cars = [
    {model: 'Vantage', topSpeed: 230},
    {model: 'Juke', topSpeed: 130},
    {model: '5 Series', topSpeed: 190}
];

const index = cars.findIndex((car) => car.model === 'Juke');

console.log(index);//1

//when it can't find an item it will return -1