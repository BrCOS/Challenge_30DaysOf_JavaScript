// map
//one of the most used order functions, let us transform data in an array form into another

const numbers =[3, 7, 11, 33];

const squares = numbers.map((number) => number * number);

console.log(numbers);//3, 7, 11, 33
console.log(squares);//9, 49, 121, 1089

//.map doesn't change the initial array, it returns a new one

//we use .map mostly to transform objects

const people = [
    {name: 'Simon', age: 30},
    {name: 'Vin', age: 28},
    {name: 'Laura', age: 40}
];

const justAges = people.map((person) => person.age);
console.log(justAges);//30, 28, 40

//we created an array of just ages, from an array with objects