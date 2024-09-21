// functions
//they are a block of code wrapped up in a way to make them reusable
//they work the just like python's functions, no biggie

function sayHello() {
    console.log('Hello');
}

sayHello();//don't forget to call them

//the code inside a function doesn't 'leak' into the rest of the code
//it's possible to import a funciton from another js file


// no input no return
//same function as above

//in the () is where the inputs will go
//in the {} is the code that run, when we call the function


// input no return

function sayHelloName(name) {//inside the () is an argument called name
    console.log('Hello ' + name);
}

sayHelloName('Coder');//when calling the function, we have to pass an argument in ()

//we can use variables as well, not just strings

const userName = 'Cool Coder';

sayHelloName(userName);

//in js function arguments are positional, which means we don't have to use the same
//name for the argument and for the variable outside the function's scope


// input return
//besides receiving an argument, we can return a value as well

function sayHelloNameReturn(name) {
    const helloMessage = 'Hello ' + name;//receives the name and creats a hello message
    console.log(helloMessage);//prints the message we created above
    return helloMessage;//returns the message, which means we can access it (the message)
}                      //outside the function's scope

const userNameReturn = 'Cool Coder';

const message = sayHelloNameReturn(userNameReturn);//here we are getting the function's returned message
                                            //and storing it in a const, so we can access it further in the code

console.log(message);

//more realistic example of this:

function convertCmToInch(cm) {
    return cm / 2.54;
}

const measurement = 22;

const inches = convertCmToInch(measurement);

console.log(inches)


// multiple inputs
//let's improve the cm to inch funciton

function convertMeasurement(measurement, unit) {//the position of what we pass in, matters
    if (unit === 'cm') {
        return measurement / 2.54;
    } else {
        return measurement * 2.54;
    }
}

const anotherMeasurement = 22;

const anotherInches = convertMeasurement(anotherMeasurement, 'cm');

console.log(inches);

const measurementIn = 12;

const cm = convertMeasurement(measurementIn, 'inches');

console.log(cm);

//a funciton will only return once, so if unit === 'cm' is true, the function
//will return and no more code will execute, so we don't need the else statement

function convertMeasurementNoElse(measurement, unit) {
    if (unit === 'cm') {
        return measurement / 2.54;
    }
    return measurement * 2.54;
}

//just to be clear, a function can have multiple statements but as soon as the
//first one that hits and run, it will end that funciton's execution and its return


// multiple returns
//well, we can only return one value from a function, but it can be any data type

function convertMeasurementMultipleReturns(measurement, unit) {
    if (unit === 'cm') {
        const inches = measurement / 2.54;
        const feet = measurement / 30.48;
        const yards = measurement / 91.44;

        const imperialMeasures = {
            inches: inches,
            feet: feet,
            yards: yards
        };

        return imperialMeasures;
    }

    if (unit === 'inches') {
        const mm = measurement * 30.48;
        const cm = measurement * 2.54;
        const meters = measurement * 91.44;

        const metricMeasures = {
            mm: mm,
            cm: cm,
            meters: meters
        };

        return metricMeasures;
    }
}

//so basically we are doing the calculations and returning a single object
//that contains multipe values

//a lot of repetition was done here, mostly while creating the objects
//we can simplify by doing this

// const metricMeasures = {
//     mm,
//     cm,
//     meters
// };

//and to keep things even shorter:

// const metricMeasures = {
//     mm: measurement * 30.48,
//     cm: measurement * 2.54,
//     meters: measurement * 91.44
// };

//and, my personal favorite, we don't even need a metricMeasures object in the first place

// return {
//     mm: measurement * 30.48,
//     cm: measurement * 2.54,
//     meters: measurement * 91.44
// };

//that huge function could look like this:

function convertMeasurementMultipleReturns(measurement, unit) {
    if (unit === 'cm') {
        return {
            mm: measurement / 30.48,
            cm: measurement / 2.54,
            meters: measurement / 91.44
        };
    }

    return {
        mm: measurement * 30.48,
        cm: measurement * 2.54,
        meters: measurement * 91.44
    };
}

//a lot better if you asked me