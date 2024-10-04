// function as inputs
//functions can be passed around like vars, objects etc...
//so, we can actually make a function that takes another function as it's input

const loggingFunction = (inputFunction, value1, value2) => {
    console.log('Executing input function');
    inputFunction(value1, value2);
    console.log('Executed input function');
}

const addNumbers = (a, b) => {
    console.log(a + b);
}

loggingFunction(addNumbers, 4, 5);