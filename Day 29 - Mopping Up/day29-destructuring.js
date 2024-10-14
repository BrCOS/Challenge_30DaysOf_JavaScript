// destructuring

//object we want to access all properties of
const pokemon = {
    name: 'Pikachu',
    hp: 35,
    attack: 55,
    defense: 40,
    specialA: 50,
    specialD: 50,
    speed: 90
};

let description = `${pokemon.name} is a pokemon with ${pokemon.hp} HP, ${pokemon.attack} attack,
${pokemon.defense} defense, ${pokemon.specialA} special attack, ${pokemon.specialD} special defense and
${pokemon.speed} speed`;

console.log(description);

//there is a better way of accessing the object properties than pokemon.name:
//declare the vars and destructure the object

const {name, hp, attack, defense, specialA, specialD, speed} = pokemon;

description = `${name} is a pokemon with ${hp} HP, ${attack} attack, ${defense} defense,
${specialA} special attack, ${specialD} special defense and ${speed} speed`;

//much better than having to type it all
//we can just do it the ones we want, but we can't reclare it
//the names on our destructing must match the name of the property in the object

//we can do this with arrays too
const question = `which pokemon has ${speed} and ${specialA} special attack?`;

console.log(question);