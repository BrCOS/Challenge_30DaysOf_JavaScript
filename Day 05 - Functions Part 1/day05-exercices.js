//print the return of the last function created (with multiple returns)

function convertMeasurement(measurement, unit) {
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

const measurement = 40;

//we can store the value in a variable

const measurementReturn = convertMeasurement(measurement, 'cm');

console.log(measurementReturn);

//or just print it out

console.log(convertMeasurement(measurement, 'cm')); //works the same