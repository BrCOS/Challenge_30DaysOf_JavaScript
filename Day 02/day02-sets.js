// sets
// they are similar to arrays but the differece is that every item in a set must be unique

let ages = [24, 12, 78, 37, 12];

let agesSet = new Set(ages); //that's how a set is declared
console.log(agesSet); //so, creating a set by the previous array with two values (number 12) that are the same
                        //when printing it, we shaw see that the second one is ignored, therefore it's not printed

let anotherSet = new Set() //that's another way to declare a set
anotherSet.add(24) //and how to add values into it