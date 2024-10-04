//Start loopCounter at 2
//Start loopCounter at 10
//Set the loop to stop at 25
//Increase loopCounter by 2 instead of 1

for (let loopCounter = 2; loopCounter < 5; loopCounter++) {
    console.log(loopCounter);
}

for (let loopCounter = 10; loopCounter < 5; loopCounter++) {
    console.log(loopCounter);
}

for (let loopCounter = 0; loopCounter < 26; loopCounter++) {
    console.log(loopCounter);
}

for (let loopCounter = 0; loopCounter < 26; loopCounter+=2) {
    console.log(loopCounter);
}

console.log('Loop Finished');


//let's loop over an array of objects.
//Here is a stripped down version of our laptop specs from earlier
//Use two types of loops (for and for of) to loop through, printing the name and storage size of each laptop

let macbook = {name: 'MacBook',
                storage: '256GB',
                ram: '8GB'
};

let mackbookPro = {name: 'MackBook Pro',
                    storage: '1TB',
                    ram: '32GB'
};

let laptops = [macbook, mackbookPro];

for (let laptop = 0; laptop < laptops.length; laptop++) {
    console.log(laptops[laptop]);
}

for (const laptop of laptops) {
    console.log(laptop);
}