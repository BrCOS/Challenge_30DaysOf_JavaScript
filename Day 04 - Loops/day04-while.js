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