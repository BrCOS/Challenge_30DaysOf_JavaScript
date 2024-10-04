// for loop
//in a way, we can say that: for each number starting at 0 (or the one that you type in) until the last number {
//do this thing here;
//}

for (let i = 0; i < 5; i++) { //the contents in () are the conditions for the loop
    console.log(i);            //the code in {} is what's going to be executed for each iteration of the for loop
}

//let i = 0; local variable used only in the for loop
//i < 5; is the run condidion for the loop, as long as this is true (under 5) the code in {} will be executed
//i++; is the change condition, increments one each time the loop runs

let family = ['Ben', 'Emily', 'Saj', 'Vahid'];

for (let i = 0; i < 4; i++) {
    console.log(family[i])
}