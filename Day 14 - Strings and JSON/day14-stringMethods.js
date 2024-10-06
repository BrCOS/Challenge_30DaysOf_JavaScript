// string methods
//strings are primitive types yet they still come with a lot of methods (functions)
//and methods we can call on them, the most commom are:

//.length is a property not a method which means we don't need () after the keyword
//tells the number of characters in the string
let lengthStr = 'All The Code';
console.log(lengthStr.length);//12


//.slice()
//slice out a portion of a string between two indexes, or just one index too
let name = 'All The Code';
const the = name.slice(4, 7);//starts on one, prints everything between 4 and 7
console.log(the);//the
//we can use negative numbers like -1, so we can access the last character
//so by using negative numbers we count backwards the string characters
//this method give us a new string


//.replace()
//let us replace the first instance of something in a string
const changed = name.replace('The', 'We');
console.log(changed);//All We Code
//this method is key sensitive

//.replaceAll()
//just like .replace() but this method replace all instances
//we can use regular expressions in both replace methods
let text = 'Dogs are the best animal in the world. Dogs are amazing';
const isCatPerson = true;

if (isCatPerson === true) {
    const changed = text.replaceAll('Dog', 'Cat');
    console.log(changed);
} else {
    console.log(text);//will just replace all Dog to Cat, and keep the S so it will be Cats
}


//.toUpperCase() and .toLowerCase()
//most used to valid users input when the value casing isn't important
//this returns a new string
const destination = 'Italy';
const validCountries = ['italy', 'greece', 'spain'];
const result = validCountries.includes(destination.toLowerCase());
console.log(result);//in this case will just return true, because we are validating after applying the method


//trimming strings
//trim() this method remove white spaces and the start and end of a string
//trimEnd() takes off the end of the string and trimSart() just off the beginning
const newDestination = 'Italy            ';
const trimmed = newDestination.trim();
const lowerCased = trimmed.toLowerCase();
const trimResult = validCountries.includes(lowerCased);
console.log(trimResult);//in this case will just return true, because we are validating after applying the method
//to avoid these extra lines we could do just:
//const cleanedDestination = newDestination.toLowerCase().trim();
//the rest remains the same


//.split()
//used to split a string into an array based on a character
//mostly used to use this on URLs or file paths and split on /
const path = '/home/users/bruno/desktop/30days/';
const pathParts = path.split('/');
console.log(pathParts);//[''], 'home', 'users', 'bruno', 'desktop', '30days', '']
const user = pathParts[3];
console.log(user);//bruno

//arrays have a method called .join() that is the reverse of .split()
const arrayNames = ['Harry', 'Ron', 'Hermione'];
const namesList = names.join(',');
console.log(namesList);//Harry,Ron,Hermione which is a string