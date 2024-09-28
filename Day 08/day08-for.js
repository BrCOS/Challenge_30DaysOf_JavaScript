// for
//the var will continue to will until loopCounter is less than 6
//each time the lopp completes an iteration the var is increased by 1
//each iteration of the loop will log out the value of the var

for (let loopCounter = 0; loopCounter < 6; loopCounter++) {
    console.log(loopCounter);
}

//we can iterate through an array by using the loop counter as the index of each element

let family = ['Ben', 'Emily', 'Saj', 'Vahid'];

//this way is not recommended because there's a better way to do it by using an array's length
for (let loopCounter = 0; loopCounter < 4; loopCounter++) {
    console.log(family[loopCounter]);
}

//this is better because we don't need to count how many elements are in the array to do the loop
for (let loopCounter = 0; loopCounter < family.length; loopCounter++) {
    console.log(family[loopCounter]);
}