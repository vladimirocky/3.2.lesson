
/*
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const square = new Rectangle(5, 5);
const rect = new Rectangle(2, 3);

console.log(square.height); // 5
console.log(rect.width); // 3
console.log(rect)// Rectangle { height: 2, width: 3 }
*/
/*
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(5, 5);
console.log(square.calcArea()); // 25
*/
/*
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(7, 2);
const p2 = new Point(3, 8);
// 7.211102550927979
console.log(Point.distance(p1, p2));
*/

class Animal{
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' издает звук');
    }
}
/*
class Dog extends Animal {
    speak() {
        console.log(this.name + ' гавкает');
    }
}
let dog = new Dog('Полкан');
dog.speak(); // Полкан гавкает
*/

class Dog extends Animal {
    speak() {
        super.speak();
        console.log(this.name + ' гавкает');
    }
}
let dog = new Dog('Полкан');
dog.speak();
// Полкан издает звук
// Полкан гавкает
