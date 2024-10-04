// or
//one or more conditions must be true so it can return true

const knowsJs = true;
const knowsPy = false;

if (knowsPy === true || knowsJs === true) {//just one is true but it returns true
    console.log('They are a Dev');
}