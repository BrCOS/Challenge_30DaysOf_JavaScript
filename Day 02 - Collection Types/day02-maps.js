// maps
//basically an object with extra stps

const aboutMe = new Map(); //that's how a map is declared

aboutMe.set('name', 'Bruno'); //that's how we add values to a map
aboutMe.set('age', 21);
aboutMe.set('sport', 'Soccer');

console.log(aboutMe);

aboutMe.delete('sport'); //that's how we delete a map's value
console.log(aboutMe);

console.log(aboutMe.size); //that's how we can see a map's size

//we can only add or remove values with .set() and .delete() methods in a map

//similarly to a set, we have to create it with a constructor new Map()

//a kay can be any data type, not just a string

//maps know their size

//maps know the order their data was added in

//maps are iterable