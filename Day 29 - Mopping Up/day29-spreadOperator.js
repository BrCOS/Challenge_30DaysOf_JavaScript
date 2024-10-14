// spread operator
//we can use it to split an array and object apart
//but the most commom use is spreading one array into another

const arrayOne = [35, 55, 40, 50, 50, 90];
const arrayTwo = [40, 33, 12, 90, 53, 37];

const newArray = [...arrayOne, ...arrayTwo];
console.log(newArray);//[35, 55, 40, 50, 50, 90, 40, 33, 12, 90, 53, 37];


//spreading an object into another
const pokemon = {name: 'Pikachu', hp: 35};
const stats = {attack: 55, defense: 40, specialA: 50, specialD: 50, speed: 90};

const fullPokemon = {...pokemon, ...stats};
console.log(fullPokemon);//{name: 'Pikachu', hp: 35, attack: 55, defense: 40, specialA: 50, specialD: 50, speed: 90};


//we can use spread with destructuring
const {name, speed, ...rest} = fullPokemon;

const description = `${name} is a pokemon with ${speed} speed`;

console.log(description);//Pikachu is a pokemon with 90 speed

//we can see that the 'rest' contains the rest of the object properties
//the spread operator is sometimes called the rest operator
console.log(rest);//{hp:35, attack:55, defense:40, specialA:50, specialD:50};