// await
//promise chaining is good and all but sometimes its nesting gets hard to understand
//promises are easier to understand with async/await but we can't use in every case, but
//if you think your situation requires, just use it

//this is what we already have, but written with a different indentation
const pokeApi = 'https://pokeapi.co/api/v2/pokemon/buizel';

let loading = true;

fetch(pokeApi)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err.message))
    .finally(() => {
        loading = false;
    });


//now the same code but with async/await syntax

try {//this is easier to understand then the code above
    const response = await fetch(pokeApi);//the fetch part until the catch part is the same as these two lines
    const data = await response.json();

    console.log(data);

} catch(err) {
    console.log('There was an error: ', err.message);
} finally {
    loading = false;
}


//that's how we create a function and then call it with async/await
async function getBuizel() {
    const pokeApi = 'https://pokeapi.co/api/v2/pokemon/buizel';
    let loading = true;

    try {
        const response = await fetch(pokeApi);
        const data = await response.json();

        return data;
    } catch (err) {
        console.log('There was an error: ', err.message);
    } finally {
        loading = false;
    }
}

//calling the funciton
const buizel = await getBuizel();
console.log(buizel);

//we put the keyword async in front of the function and when calling it we used the
//await kwyword, this is for the js to know to wait for it to return before moving on

//as we know, a function ends when a return is meet, but we also know that the finally block
//will always run even after a return is reached, so in this case the laoding will be set to false