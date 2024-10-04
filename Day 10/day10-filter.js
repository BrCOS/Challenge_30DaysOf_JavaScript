// filter
//.filter() will filter an array based on a condition we'll pass into it
//when we pass the function, if returns true the item will be kept in the array, if not, then it won't

const ages = [13, 17, 21, 33];

const over18 = ages.filter((age) => age > 18);

console.log(over18);//21, 33

//it's valid to remember that a empty array as a return is still a valid return