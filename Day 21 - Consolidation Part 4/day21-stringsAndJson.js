// strings and json
//we can call methods (functions) on a string

const message = 'Welcome to 30 days of JS';


// lenght
console.log(message.length);//24


// slice
//gives us a section of a string between two indexes
console.log(message.slice(8, 10));//'to'


// replace
//will replace the first instance of a substring
console.log(message.replace('JS', 'JavaScript'));//'Welcome to 30 days of JavaScript'
console.log(message.replace('o', 'a'));//Welcame to 30 days of JS


// replaceAll
//replace every instance of a substring
console.log(message.replaceAll('o', 'a'));//Welcame ta 30 days af JS


// toUpperCase() and toLowerCase()
//change the string's case
console.log(message.toUpperCase());//WELCOME TO 30 DAYS OF JS
console.log(message.toLowerCase());//welcome to 30 days of js


// trim
//removes any whitespaces
//we have .trim(), .trimStart() and .trimEnd()
const strToTrim = '    welcome to here      ';
console.log(strToTrim.trim());//welcome to here
console.log(strToTrim.trimStart());//welcome to here      
console.log(strToTrim.trimEnd());//    welcome to here


// split
//split a string based on any character
const randomCode = '30JS-D21-L1';

console.log(randomCode.split('-'));//['30JS', 'D21', 'L1']


// templete literal
//python string format
const course = '30JS';
const day = 20;
const lesson = 1;

console.log(`Course Name: ${course}, Current Day: ${day} and Current Lesson: ${lesson}`)


// JSON
//to represent a JS object in string form, we use JSON.stringify()
//to read in a string with JSON we use JSON.parse()
const car = {
    make: 'Nissan',
    model: 'GTR',
    transmission: 'manual',
    familyFriendly: false,
    gears: 6,
};

//converts car object into a string
const strCar = JSON.stringify(car);
console.log(strCar);

//reads that string and converts it back into an object
const parseCar = JSON.parse(strCar);
console.log(parseCar);