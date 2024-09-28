// anonymous functions
//functions are created with a syntax then assigned to a storage place with the
//function kewyword or with a const, since creating a function and storing one
//are two separeted whings we can create an anonymous function

//so, if we want to use the function above as an example:

const logInOutAgain = (in1, in2, action) => {
    console.log('in1: ' + in1);
    console.log('in2: ' + in2);
  
    const result = action(in1, in2);
    console.log('result: ' + result);

    return result;
}

const convertedAgain = logInOutAgain(10, 2,
    (num1, num2) => {
        return num1 + num2;
    }
);

//notice that we got rid of the addNumbers function and just create one
//that does the same thing on the spot and passed it as an argument (action)
//we could have written that in just one line of code, but this way it's easier to visualize