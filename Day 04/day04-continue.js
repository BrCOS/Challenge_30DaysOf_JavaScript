// continue
//same as the break, but this one doesn't end the loop
//so it just goes to the next iteration

let ages = [4, 8, 11, 20];

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