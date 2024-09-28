// continue
//sounds simple but it can be a little tricky
//we use continue when we want to end the current iteration but carry on with the rest

let ingredients = [//this is an array
    {name: 'fennel', vegetarian: true},//this is an object
    {name: 'paprika', vegetarian: true},
    {name: 'sesame', vegetarian: true},
    {name: 'beef', vegetarian: false},
    {name: 'potato', vegetarian: true}
];

for (const ingredient of ingredients) {
    if (ingredient.vegetarian === false) {
        continue;//if it's false, ignore it but keep printing the rest
    }
    console.log(ingredient.name);//prints fennel, paprika sesame and potato
}                                   //basically everything that's true
