// sets
//just like arrays but each value must be unique
//[1, 2, 3, 3, 3, 4]; is a valid array but not a valid set

//we can't access a set element by its index, first we have convert it into an array

let ages = [24, 12, 78, 37, 12];//array

let agesSet = new Set([24, 12, 78, 37, 12])//set
//let agesSet = new Set(ages); //another way to create an set

//a nice thing about sets is that it can be used deduplicate an array
//basically it elimitades repeated values from the set

let agesDedupe = Array.from(agesSet);

console.log(agesDedupe);//will print it all except the values that are repeated
//[24, 12, 78, 37]