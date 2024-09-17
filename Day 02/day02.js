// arrays

let ages = [24, 12, 78, 37, 12]; //that's how an array is declared
console.log(ages)

let mixed = [false, 'Bruno', 21, true]; //we can store many data types, but that's not encouraged
console.log(mixed)

console.log(ages[0]); //we access an array value by its index


// sets
// they are similar to arrays but the differece is that every item in a set must be unique

let agesSet = new Set(ages); //that's how a set is declared
console.log(agesSet); //so, creating a set by the previous array with two values (number 12) that are the same
                        //when printing it, we shaw see that the second one is ignored, therefore it's not printed

let anotherSet = new Set() //that's another way to declare a set
anotherSet.add(24) //and how to add values into it


// objects
//the whole point of objects is to store mixed data types with a key value assign to it
//we can store arrays and other objects inside it

let pcSpecs = {
    screenSize: 15, //as we can see, we have a key (screenSize) and a value (15) assigned to it
    processor: 'AMD Ryzen 5600', //we can store many data types in objects and it's encouraged
    ram: 16,
    storage: 'M2 512 GB'
};
console.log(pcSpecs); //we can see every value and it's key

console.log(pcSpecs.screenSize); //that's how we access an object's value, by its key

pcSpecs.screenSize = 16; //and that's how we change an object value
console.log(pcSpecs);

let laptopSpecs = {
    screenSize: 14,
    ram: {
        capacity: 32, //object inside an object
        units: 'MB'
    },
    ports: ['3x USB', '2x USB-C', 'HDMI', 'HDMI'] //array inside an object
};
console.log(laptopSpecs);

laptopSpecs.ram.units = 'GB'; //that's how we can change a value of an object's object
console.log(laptopSpecs);

laptopSpecs.ports[3] = 'Display Port'; //that's how we can change a value of an array's object
console.log(laptopSpecs);


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