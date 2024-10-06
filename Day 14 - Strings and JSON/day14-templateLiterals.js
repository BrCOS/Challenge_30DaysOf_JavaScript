// template literals
//will give us some extra powers to the strings we will love
//kind of like the fstring in python

//they are multi-line
const multiLineString = `so
this
is
fine`;


//this makes concatenation easier to us
//we can use ${} and place a variable directly into the string
const name = 'Bruno';
const welcomeMessage = `Welcome: ${name}`;
console.log(welcomeMessage);//Welcome: Bruno


//we can do calculations
const starter = 6.50;
const mains = 12;
const dessert = 4;
let theBill = `Your Total: ${starter + mains + dessert}`;//just add the $$ to display the currency
console.log(theBill);//Your Total: 22.5


//and call functions
const calculateTotal = () => {
    return starter + mains + dessert;
}

theBill = `Your Total: ${calculateTotal()}`;
console.log(theBill);//Your Total: 22.5


//we can have more than one template literal
const calculateTip = (total) => {
    return total * 0.15;
}

const total = calculateTotal();
const tip = calculateTip(total);

theBill = `Your Total: ${total} + ${tip} tip`;
console.log(theBill);//Your Total: 22.5 + 3.75 tip