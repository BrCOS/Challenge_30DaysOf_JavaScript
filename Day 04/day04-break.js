// break
//we use it when we want to end a lopp early

let ages = [4, 8, 11, 20];

for (const age of ages) {
    if (age === 11) {
        break;
    }
    console.log(age);//will print 4 and 8 before endind it
}
//when the condiditon is met the break will be executed and the loop will end
//and it'll go to the next line of code after the loop