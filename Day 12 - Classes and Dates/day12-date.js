// date()

//like all classes we get a new date by calling its contructor
const now = new Date();

console.log(now);//'now' isn't a string is just human readable date time

//there are a lot of instance methods we can call on a Date:

console.log(now.getFullYear);//2024
console.log(now.getHours);//20
console.log(now.getTimezoneOffset);//180