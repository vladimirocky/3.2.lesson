// Цель: нарисовать три фигуры:
// красный прямоугольник, который двигается вертикально
// зеленый круг, который двигается горизонтально
// синий квалрат, который двигается по диагонали и вращается

// Решение: изменим только Square

class Figure {

    constructor() {
        this.positionX = 0;
        this.positionY = 0;
    }

    draw() {}

    move() {
        this.moveLeft = false;
        this.moveUp = false;
    }

    Computer(f1, f2, f3, f4) {
        let counter = 0;
        
        if (f1 == f2 || f1 == f3 || f1 == f4) {
            counter++;
            document.getElementById("counter").innerHTML = counter;    
        }

        if (f2 == f3 || f2 == f4) {
            counter++;
            document.getElementById("counter").innerHTML = counter;
        }

        if (f4 == f3) {
            counter++;
            document.getElementById("counter").innerHTML = counter;
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
                top: ${this.positionY}px;
                left: ${this.positionX}px;">${this.coordinate}</div>
            `;
    }

    move() {
        switch(this.positionX) {
            case 450: 
                this.moveLeft = true;
                break;
            
            case 0:
                this.moveLeft = false;
                break;
        }

        switch(this.positionY) {

            case 250:
                    this.moveUp = true;
                    break;

                case 0:
                    this.moveUp = false;
                    break;
        }

        this.moveLeft ? this.positionX -= 1 : this.positionX += 1;
        this.moveUp ? this.positionY -= 5 : this.positionY += 5;

        this.coordinate = this.positionX + this.positionY
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
                left: ${this.positionX}px">${this.coordinate}</div>
        `;
    }

    move() {
        switch(this.positionX) {
            case 800: 
                this.moveLeft = true;
                break;
            
            case 0:
                this.moveLeft = false;
                break;
        }
        this.moveLeft ? this.positionX -= 50 : this.positionX += 50;
        
        this.coordinate = this.positionX + this.positionY
    }
}

class Square extends Figure {
    constructor() {
        super(); // вызов родительского конструктора
        this.rotation = 0;
    }

    draw() {
        document.getElementById("app").innerHTML += `
            <div style="
                background: blue;
                width: 50px;
                height: 50px;
                position: absolute;
                transform: rotate(${this.rotation}turn);
                top: ${this.positionY}px;
                left: ${this.positionX}px">${this.coordinate}</div>
        `;
    }

    move() { // переопределение метода
        switch(this.positionX) {
            case 800: 
                this.moveLeft = true;
                break;
            
            case 0:
                this.moveLeft = false;
                break;
        }

        switch(this.positionY) {

            case 500:
                    this.moveUp = true;
                    break;

                case 0:
                    this.moveUp = false;
                    break;
        }

        this.moveLeft ? this.positionX -= 50 : this.positionX += 50;
        this.moveUp ? this.positionY -= 25 : this.positionY += 25;

        this.rotation += 0.1;

        this.coordinate = this.positionX + this.positionY;
    }
}

class MyFigure extends Figure {
    draw() {
        document.getElementById("app").innerHTML += `
            <div style="
                background: yellow;
                width: 50px;
                height: 50px;
                position: absolute;
                top: ${this.positionY}px;">${this.coordinate}</div>
        `;
    }

    move() { // переопределение метода
        switch(this.positionY) {

            case 500:
                    this.moveUp = true;
                    break;

                case 0:
                    this.moveUp = false;
                    break;
        }
        this.moveUp ? this.positionY -= 25 : this.positionY += 25;
        
        this.coordinate = this.positionY;
    }
    
}

const figures = [new Rect(), new Circle(), new Square(), new MyFigure ];
let fg1 = figures[0], fg2 = figures[1], fg3 = figures[2], fg4 = figures[3];


setInterval(() => {
    document.getElementById("app").innerHTML = "";
    for (let figure of figures) {
        figure.move();
        figure.draw();
        figure.Computer(fg1.coordinate, fg2.coordinate, fg3.coordinate, fg4.coordinate);
    }
}, 200);