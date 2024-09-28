// arrow functions
//is just another way to declare a function, it has a shorter syntax

const functionName = (arg1, arg2, arg3) => {//it uses =>, so the name is because of that
    return someValue;
}

//also, that function lives in a variable, so we can actually pass it around just like a const

//let's make an arrow function for yesterday's function

const convertMeasurement = (measurement, unit) => {
    if (unit === 'cm') {
        return measurement / 2.54;
    } else {
        return measurement * 2.54;
    }
}

const length = 5;

const cmLength = convertMeasurement(length, 'inches');

console.log(cmLength); //works just like the previous one

//the difference is that this function is scoped, which means it's more portable
//it solved some problems when it was added later to the language