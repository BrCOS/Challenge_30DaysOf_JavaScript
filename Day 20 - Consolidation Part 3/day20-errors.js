// erros
//are created and thrown like this

// throw new Error('Something went wrong');


//but we should deal with an error with a try/catch block
try {//anything thrown in the try block will be caught by the catch block
    throw new Error('Something went wrong');
} catch {
    console.log('Whoops, looks like we caught an error');
}

//sometimes the catch block takes an argument, generally names e, err or error, these are the most used ones

try {
    throw new Error('Something went wrong');
} catch (e) {
    console.log('Whoops, looks like we caught an error: ', e.message);
}

//whenever an error is thrown in a try block it will stop the execution of the code and go to the catch block
//so, anything after the line that throws an error isn't executed


//finally

try {
    //risky code
} catch {
    //run and process any errors that get thrown
} finally {
    //always runs regardledss of any errors
}