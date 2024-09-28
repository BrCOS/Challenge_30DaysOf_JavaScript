// if, else if, else statements
//the if else statements only works when we have a conditional that's true and another one that's false
//now, if we have more things to check, we have to use else if statements with the if statement

if (temperature < 10) {
    console.log('Cold');
} else if (temperature < 20) {
    console.log('Comfortable');
} else if (temperature < 30) {
    console.log('Hot');
} else {
    console.log('Very Hot');
}