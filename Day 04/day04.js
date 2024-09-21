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


// while loop
//they are unpopular and rarely used
//while a condition is true:
//do this;
//}

//the problem with while loops, is that they can easily great infinite loops:

let age = 30;

while (age < 100) {
    console.log('Still Living!');
    age = age + 5;//this line avoids an infinite loop
}

//this loop is more used in games, and probably only at games:

let exit = false;

while (exit === false) {
    //don't close the game

    if (userInput === 'exit button') {
        exit = true;
    }
}


// for of loops
//we use a temporary variable that stores the iterarions, so we can use it in the loop

let ages = [4, 8, 11, 20];

for (const age of ages) {
    console.log(age);
}


// break
//we use it when we want to end a lopp early

for (const age of ages) {
    if (age === 11) {
        break;
    }
    console.log(age);//will print 4 and 8 before endind it
}
//when the condiditon is met the break will be executed and the loop will end
//and it'll go to the next line of code after the loop


// continue
//same as the break, but this one doesn't end the loop
//so it just goes to the next iteration

for (const age of ages) {
    if (age === 11) {
        continue;
    }
    console.log(age);//will print 4, 8 and 20
}

// some ways to use the continue is to filter an array based on a condition

let moreAges = [4, 8, 11, 20, 9, 10, 34];
let filteredAges = [];

for (const age of moreAges) {
    if (age < 11) {
        continue;
    }
    filteredAges.push(age);//adds an element in an existing array
}//this creates a copy so the values are still in their original array too

console.log(moreAges);//original array
console.log(filteredAges);//11, 20, 34