// maps
//these are objects with extra-steps
//maps have some extra functionality over an object
//so we can't access it the same way we'd an object
//we have to use .get('keyName'); and .set('keyName');

const aboutMe = new Map(); //that's how a map is created
aboutMe.set('name', 'Bruno');
aboutMe.get('name');

console.log(aboutMe.get('name'));