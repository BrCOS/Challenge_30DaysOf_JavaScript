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