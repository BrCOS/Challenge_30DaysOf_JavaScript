// for of
//the thing with loops is that is kind of hard to make them run the correct number of times
//and off by one errors are more commom than you might think, like this one below

let ages = [4,8,11,20];

for (let counter = 0; counter <= ages.length; counter++) {
    console.log(ages[counter]);//prints 4, 8, 11, 20, undefined
}

//in this particular example the undefined value is appearing because we are using the <=
//so the loop runs one more time, we can just change the operator or use for of loops

for (const age of ages) {
    console.log(age);//prints 4, 8, 11, 20
}

//this is easier to write and also avoids some miestakes because of its simple syntax