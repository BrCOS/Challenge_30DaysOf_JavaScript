// concatenation
//this is just joining strings together by using +

const first = 'All';
const second = 'The';
const third = 'Code';
const name = first + ' ' + second + ' ' + third;
console.log(name);//All The Code


//we can also use the .concat() method
//this is not commom at all, but it exists
const hello = 'Hello';
const world = 'World';
const helloWorld = hello.concat(' ', world);
console.log(helloWorld);//Hello World