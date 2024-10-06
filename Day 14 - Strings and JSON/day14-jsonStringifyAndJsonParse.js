// json.stringify & json.parse

//JSON.stringify()
//takes a js object and creates a stringified version of it that adheres to the JSON standard
//will transform out objecto a json object

const car = {
    make: 'Nissan',
    model: 'GTR',
    transmission: 'manual',
    familyFriendly: false,
    gears: 6
};

const data = JSON.stringify(car);
console.log(data);//{"make":"Nissan","model":"GTR","transmission":"manual","familyFriendly":false,"gears":6}

//this method has some optional arguments
//JSON.stringify(value, replacer, space);
//the most useful for us is the space, it sets the number of spaces to indent sub properties
//only used to make things more humanly readable
//we can let the replacer to be set as null


//JSON.parse()
//will transform the json object into an js object
//most JSON's data we'll get will be from a file or a response of a URL request

const jsonData = '[{"make":"Nissan","model":"GTR","transmission":"manual","familyFriendly":false,"gears":6},{"make":"Nissan","model":"Rogue","transmission":"automatic","familyFriendly":true,"gears":5}]';
const cars = JSON.parse(jsonData);
console.log(cars);//will trabsform that into a js object