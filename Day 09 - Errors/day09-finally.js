// finally
//the actual full syntax of a try/catch contains a finally part in the end

try {
    //try code part
    //where we run the potential risky code
} catch {
    //catch part
    //where we run and process any error that get thrown
} finally {
    //finally part
    //always runs regardless of an error was thrown or not
}

//we use finally when we have done some things in the try part that we have to
//clean up or reset without any errors being thrown
//in a more realistic way, we use it to clear some kind of loading indicator that we set
//at the start of our try part, that we want to reset it no matter if there was an error or not:

let loading = false;

try {
    loading = true;
    console.log('Running slow code');
    throw new Error ('Something went wrong');
} catch(error) {
    console.log('Looks like we caught an error: ', error.message);
} finally {
    loading = false;
}

console.log(loading);
//at the end the loading will be false, even though we set it to be true at the try part