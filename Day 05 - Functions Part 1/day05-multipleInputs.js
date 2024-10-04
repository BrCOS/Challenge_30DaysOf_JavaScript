// multiple inputs
//let's improve the cm to inch funciton

function convertMeasurement(measurement, unit) {//the position of what we pass in, matters
    if (unit === 'cm') {
        return measurement / 2.54;
    } else {
        return measurement * 2.54;
    }
}

const measurement = 22;

const inches = convertMeasurement(measurement, 'cm');

console.log(inches);

const measurementIn = 12;

const cm = convertMeasurement(measurementIn, 'inches');

console.log(cm);

//a funciton will only return once, so if unit === 'cm' is true, the function
//will return and no more code will execute, so we don't need the else statement

function convertMeasurementAgain(measurement, unit) {
    if (unit === 'cm') {
        return measurement / 2.54;
    }
    return measurement * 2.54;
}

//just to be clear, a function can have multiple statements but as soon as the
//first one that hits and run, it will end that funciton's execution and its return