// functions as inputs
//this is kind of mind-blowing, but yeah:

const addNumbers = (num1, num2) => {
    return num1 + num2;
}
  
const logInOut = (in1, in2, action) => {
    console.log('in1: ' + in1);
    console.log('in2: ' + in2);
  
    const result = action(in1, in2);
    console.log('result: ' + result);

    return result;
}
  
const converted = logInOut(10, 2, addNumbers);

//well, as we can see here, we created a function called addNumbers
//however, we only call it once, on the last line, when we pass two other arguments
//the function logInOut takes another function as a parameter (action)
//and only knows what function it is when we pass it to it on the last line
//we can then print the numbers (num1, num2) as in1 and in2
//the function returns the sum of the numbers, which we also print as the result