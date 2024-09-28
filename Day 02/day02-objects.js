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