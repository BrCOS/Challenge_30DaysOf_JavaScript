// default arguments
//we can assign default values to the arguments

function coolestFunction(arg1 = 6, arg2 = 'Hello') {
    const result = arg1 - 5;
    const uppercased = arg2.toUpperCase();

    console.log(result);
    console.log(uppercased);
}

//we can call this function without any, just one or both arguments

coolestFunction();
coolestFunction(10);
coolestFunction(10, 'all the code');

//because arguments are positional, we can't skip the first argument for the second one
//so, put one value, two or none