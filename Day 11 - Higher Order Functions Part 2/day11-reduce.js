// reduce
//it allow us to change an array to anything, single number, long string, boolean, object and etc...

const numbers = [1, 5, 10, 17];

const total = numbers.reduce((runningTotal, number) => {
    return runningTotal + number;
}, 0);

console.log(total);//33

//we have the array numbers, and we sum them up with reduce starting with 0
//the end of each calculation is passed to the next calculation by starting with 0

//all these numbers are from the array numbers
//0 + 1 = 1 -> return 1
//1 + 5 = 6 -> return 6
//6 + 10 = 16 -> return 16
//16 + 17 = 33 -> return 33
//and 33 is our final result 

//the 0 at the end, is the initial value that gets passed on the first iteration
//it's optional, but extremely recommended

//the full declaration for the function we pass into .reduce() is:
//array.reduce((previous, current) => {
//code that processes previous and current
//return newValue;
//}, initialValue);

//this function will be executed for each item in the array


//transforming array into objects
const students = [
    {name: 'Harry Potter', house: 'Gryffindor' },
    {name: 'Hermione Granger', house: 'Gryffindor' },
    {name: 'Ron Weasley', house: 'Gryffindor' },
    {name: 'Draco Malfoy', house: 'Slytherin' },
    {name: 'Luna Lovegood', house: 'Ravenclaw' },
    {name: 'Cho Chang', house: 'Ravenclaw' },
    {name: 'Cedric Diggory', house: 'Hufflepuff' },
    {name: 'Severus Snape', house: 'Slytherin' },
    {name: 'Ginny Weasley', house: 'Gryffindor' },
    {name: 'Tom Riddle', house: 'Slytherin' },
    {name: 'Sybil Trelawney', house: 'Hufflepuff' },
    {name: 'Gilderoy Lockhart', house: 'Ravenclaw' }  
];

//we want to change this structure to this:
const school = {
    Gryffindor: [],
    Slytherin: [],
    Ravenclaw: [],
    Hufflepuff: [],
    totalStudents: 0
};

//let's use the reduce
const schoolReduce = students.reduce((school, student) => {
    if(!school[student.house]) {
        school[student.house] = [];
    }
    school[student.house].push(student.name);

    school.totalStudents += 1;

    return school;
}, {totalStudents: 0});

console.log(schoolReduce);