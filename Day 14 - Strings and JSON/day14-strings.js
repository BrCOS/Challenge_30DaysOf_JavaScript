// strings
//a series of characters between a pair of quotation marks is a string

//to use quotation marks in a string we can escape the speech
//to do this we use a \ to tell js to turn  the next special character into a string character
let str = 'Bruno says: \'Hello World\' loudly';
console.log(str);//Bruno says: 'Hello World' loudly

//or just use the quotation mark you didn't use to start the string
let anotherStr = "Bruno says: 'Hello World' loudly";
console.log(anotherStr);//Bruno says: 'Hello World' loudly


//there are a number of escape characters like:
// \b - Backspace
// \f - Form feed
// \n - New line
// \r - Carriage return
// \t - Horizontal tab
// \v - Vertical tab

//to print a single \ we use another \:

let backSlashStr = 'This is how you print a \\';
console.log(backSlashStr);//This is how you print a \