// anonymous functions
//functions can actually exist without a name
//we'll rewrite the function above:

const loggingFunction2 = (inputFunction, value1, value2) => {
    console.log('Executing input function');
    inputFunction(value1, value2);
    console.log('Executed input function');
}

loggingFunction2((a, b) => console.log(a + b), 5, 9);