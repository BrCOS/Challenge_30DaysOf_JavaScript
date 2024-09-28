// or operator
//returns true if any of the statements are true

const knowsJS = true;
const knowsPy = false;

if (knowsJS === true || knowsPy === true) {
    console.log('This is a dev team!') // returns true because one knows JS but not Python,                   
}                                       //so, at least one statement is true, therefore everything is true

//another way to do this or operator when dealing with booleans type, such as the ones declared above
if (knowsJS || knowsPy) {
    console.log('This is a dev team'); //returns true, same explanation but the code is implicity
}