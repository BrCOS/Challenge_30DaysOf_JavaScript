// and
//we use and to check multiple statments

const temperature = 28;

if (temperature > 28) {
    console.log('Too Hot');
}

if (temperature > 15 && temperature <= 28) {//all the conditions must be true so it can return true
    console.log('Just Right');
}

if (temperature <= 15) {
    console.log('Too Cold');
}