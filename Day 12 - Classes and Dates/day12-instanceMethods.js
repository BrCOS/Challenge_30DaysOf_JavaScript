// instance methods
//the real power of classes
//pretty much just functions in a class, that we call method

class Triangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
}

let tri = new Triangle(10, 10);

//we could do this to get the triangule's area, or we could put it inside the class and just call it
let area = (tri.height * tri.width) / 2;

console.log(area);

//class with area method (function) inside

class NewTriangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return (this.height * this.width) / 2;
    }
}

let newTri = new NewTriangle(10, 10);

console.log(newTri.area());//50