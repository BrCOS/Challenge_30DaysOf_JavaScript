// multiple returns
//well, we can only return one value from a function, but it can be any data type

function convertMeasurement(measurement, unit) {
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

function convertMeasurementAgain(measurement, unit) {
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