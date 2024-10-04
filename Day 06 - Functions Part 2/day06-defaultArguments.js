// default arguments
//function's arguments are positional and when calling a function we need to pass the arguments in the same
//order that we created them in the function, otherwise it may display a different result than we are expecting

//the order and position of the arguments matter

//we can make an argument sort of opcional

function showPositions(firstArg, secondArg, thirdArg, optinalArg = '4') {//basically we are passing a default value
    console.log(firstArg);                                               //to rhe optionalArg that if it doens't gets
    console.log(secondArg);                                              //value, it will just use the one we passed
    console.log(thirdArg);
    console.log(optinalArg);
}

console.log('Without optional');
showPositions('1', '2', '3'); //will print: 1, 2, 3, 4

console.log('With optional');
showPositions('1', '2', '3', 'Hello');//will print just that