// input return
//besides receiving an argument, we can return a value as well

function sayHelloName(name) {
    const helloMessage = 'Hello ' + name;//receives the name and creats a hello message
    console.log(helloMessage);//prints the message we created above
    return helloMessage;//returns the message, which means we can access it (the message)
}                      //outside the function's scope

const userName = 'Cool Coder';

const message = sayHelloName(userName);//here we are getting the function's returned message
                                            //and storing it in a const, so we can access it further in the code

console.log(message);

//more realistic example of this:

function convertCmToInch(cm) {
    return cm / 2.54;
}

const measurement = 22;

const inches = convertCmToInch(measurement);

console.log(inches)