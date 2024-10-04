// sort
//takes a function and sort the items in the array

const ages = [3, 7, 33, 23, 68, 7, 44];

const sortedAges = ages.sort((a, b) => a - b);

console.log(sortedAges);

//or just

console.log(ages.sort((a, b) => a - b));//prints the array in ascending order
console.log(ages.sort((a, b) => b - a));//prints the array in descending order

//just remember, that it returns a new array and not a copy of the existing one

//we can sort anything
//that takes an a and b argument and returns a valid number

const strings = ['Simon', 'David', 'Sara', 'Rita'];

const sortedStrings = strings.sort((a, b) => a.length - b.length);
console.log(sortedStrings);//prints the smallest name to the bigger one

//we can sort objects by a property

const cars = [
    {model: 'Vantage', topSpeed: 230},
    {model: 'Juke', topSpeed: 130},
    {model: '5 Series', topSpeed: 190}
];

const sortedCars = cars.sort((a, b) => a.topSpeed - b.topSpeed);
console.log(sortedCars);