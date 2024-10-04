// catch()
//the block try/catch can take an argument that receives the thrown error

try {
    throw new Error('Something went wrong');
} catch(error) {
    console.log('Looks like we caught an error: ', error.message);
}

//if an error is thrown in the try, no code after the throw will run in the try block

try {
    console.log('Hello');
    throw new Error('Something went wrong');
    console.log('World');//this wont be printed because an error was thrown on the line above
} catch(error) {
    console.log('Looks like we caught an error: ', error.message);
}

//this is because after the error nothing after it in the block is safe to run,
//so it just skips to the catch part