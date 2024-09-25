// consts and vars

const pi = 3.14; //we use consts for data that never changes

var age = 21; //use vars for data that can change

let age = 21; //but it's more recommended to use let instead of var
                //mostly because it keep things locally scoped


// strings
//just like everything in js, strings are objects and they have functions
//who are known as methods, that we can call

const myString = '   Hello World   ';

const lowerCased = myString.toLowerCase();
const removeWhiteSpaces = myString.trim();
const manyStrings = myString.repeat(4);
const stringLength = myString.length;//the only method that it's not a function
//but rather a property to be read, like if it was a value, which if you think
//about it kind of is, like, the value of the length


// boolean
//are true or false
//used for comparison operations or to just flag something, like true or false or just on or off

let greaterThan = 4 > 3;
let lessThan = 3 < 4;
let greaterThanEqualTo = 4 >= 3;
let equalTo = 3 == 3;
let notEqualTo = 3 != 4;
let exaclyEqualTo = 3 === 3;


// == vs ===
//basically === is just better because it checks if everything is exactly the same
//even data type and content, so if you want something exatcly the same as the other
//just use ===, now if tou want something the same but not really use the ==