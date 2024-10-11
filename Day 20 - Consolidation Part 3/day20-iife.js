// immediately invoked function expression (IIFE)
//sometimes when using await we will get an error about needing to put await inside a function marked as async

const slowFunction = async () => {
    const data = await slowFunction();
    return data;
};