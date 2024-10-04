// positional arguments
//as we know, function arguments are positional in js, which means that the order matter
//and there is no other way to identify which input relates to which argument

function coolestFunction(arg1, arg2) {//arg1 is expect to be a number and arg2 to be a string
    const result = arg1 - 5;
    const uppercased = arg2.toUpperCase();
}

//by default the function will try to use the arguments only in a way they are designed for