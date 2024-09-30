// throw
//sometimes things go wrong and we need to throw an error

//throw new Error('Something went wrong');

try {
    throw new Error ('Something went wrong');
} catch {
    console.log('Looks like er caught an error');
}

//functions can also throw errors

const naughtyFunction = (number) => {
    if (number === 5) {
        throw new Error ('Surprise the 5 causes an error');
    }
    return number + 1;
}

//we can wrap it in a try/catch like this, so we can deal with the error

try {
    const nextNumber = naughtyFunction(5);
    console.log(nextNumber);
} catch {
    //handle error here
}