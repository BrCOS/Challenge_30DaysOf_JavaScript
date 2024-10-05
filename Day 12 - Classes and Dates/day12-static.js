// static
//used to add other functionalities to the class

class Triangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return (this.height * this.width) / 2;
    }

    static description = "Triangle's are three sided shapes that tesselate and can be symmetrical down the y-axis";//this is a property

    static areaDifference(tri1, tri2) {//this is a method
        return tri1.area() - tri2.area();
    }
}

//printing the static text (property)
let tri = new Triangle(10, 10);

console.log(tri.area());//50
console.log(Triangle.description);//prints the static text

//printing the method
let bigTri = new Triangle(100, 80);
let smallTri = new Triangle(20, 30);

const areaDiff = Triangle.areaDifference(bigTri, smallTri);

console.log(areaDiff);//3700