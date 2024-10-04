// and operator
//this operator will first evaluate if the first statement is true then if the second one is true
//only returns true when all statements are true, if not the whole condition is false

if (temperature > 28) {
    console.log('Too Hot');
}

if (temperature > 15 && temperature <= 28) { //the and operator will only return true if both
    console.log('Just Right');                  //statements are true
}

if (temperature <= 15) {
    console.log('Too Cold');
}

//if just one statement is false, the and operator will return false, like evertyhing inside
//parentheses is false, no matter how many && operator you may have