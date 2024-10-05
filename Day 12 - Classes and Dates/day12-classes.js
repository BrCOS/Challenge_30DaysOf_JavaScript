// classes
//classes are a way to define a template of an object, then create an instance of that object when needed

class Triangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

//creates a class with a constructor which takes a height and width inside the constructor
//we are setting the height and width internally with the this.
//this. literally refers to this instance of the class

let tri = new Triangle(10, 10);//here, we are creating an instance of the class
console.log(tri);//{height: 10, width: 10};