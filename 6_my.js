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

    static count = 0;

    static Computer(figures) {
        // for (let figure of figures) {
        //     for (let fig of figures) {
        //         let diff = Math.sqrt(Math.pow(fig.positionX - figure.positionX, 2) + Math.pow(fig.positionY - figure.positionY));
        //         if (diff < 50) {
        //             this.count++;
        //         }
        //     }
        // }
        console.log(figures)
        figures.forEach(item, index => {
            figures.forEach((item_q, index_q) => {
                if (index_q !== index) {
                    let diff = Math.sqrt(Math.pow(item.positionX - item_q.positionX, 2) + Math.pow(item.positionY - item_q.positionY));
                    if (diff < 50) {
                        this.count++;
                        console.log(this.count);
                    }
                }
            });
        });
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
                left: 0;
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
    }

    Figure.Computer(figures);

    let counter = document.getElementById("counter");
    counter.innerHTML = '';
    counter.innerHTML = `${Figure.count}`;
}, 200);