// instance variables
//when we run a class constructor we get an instance of that class

class Triangle {
    constructor (height, width) {//we have two instance variables
        this.height = height;
        this.width = width;
    }
}

//we can access the instances properties like objects
const tri = new Triangle(10, 10);

console.log(tri.width);//10
console.log(tri.height);//10

//and change its values like objects too
tri.height = 100;
console.log(tri);//{height:100, width:10}