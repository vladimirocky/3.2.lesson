// Цель: нарисовать три фигуры:
// красный прямоугольник, который двигается вертикально
// зеленый круг, который двигается горизонтально
// синий квалрат, который двигается по диагонали
// Решение: создавать третий класс уже слишком, используем мощь ООП
class Figure {
    // абстрактный класс

    constructor() {
        this.position = 0;
    }
  
    draw() {} // виртуальный метод
  
    move() {
        if (this.position < 300) {
            this.position += 10;
        } else {
            this.position = 0;
        }
    }
}

class Rect extends Figure { // наследование
    draw() {
        // полиморфизм
        document.getElementById("app").innerHTML += `
            <div style="
                background: red;
                width: 100px;
                height: 50px;
                position: absolute;
                top: ${this.position}px"></div>
            `;
    }
}

class Circle extends Figure { // наследование
    draw() {
        // полиморфизм
        document.getElementById("app").innerHTML += `
            <div style="
                background: green;
                width: 50px;
                height: 50px;
                border-radius: 25px;
                position: absolute;
                top: 10px;
                left: ${this.position}px"></div>
        `;
    }
}

class Square extends Figure { // наследование
    draw() {
        // полиморфизм
        document.getElementById("app").innerHTML += `
            <div style="
                background: blue;
                width: 50px;
                height: 50px;
                position: absolute;
                top: ${this.position}px;
                left: ${this.position}px"></div>
        `;
    }
}


const figures = [ new Rect(), new Circle(), new Square() ];
setInterval(() => {
    document.getElementById("app").innerHTML = "";
    for (let figure of figures) {
        figure.move();
        figure.draw();
    }
}, 200);
