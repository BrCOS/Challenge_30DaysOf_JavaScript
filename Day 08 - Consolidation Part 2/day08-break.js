// break
//if you want to stop the loop before your stop condition has been met just use break

let ingredients = ['fennel', 'paprika', 'sesame', 'beef'];

const allergy = 'sesame';

for (const ingredient of ingredients) {
    if (allergy === ingredient) {
        break;
    }
    console.log(ingredient);//prints fennel and paprika before stopping
}