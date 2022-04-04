// Цель: нарисовать две фигуры:
// красный прямоугольник, который двигается вертикально
// зеленый круг, который двигается горизонтально
// Решение: пока еще можно просто создать похожий класс
class Rect {
    constructor() {
        this.position = 0;
    }
  
    draw() {
        document.getElementById("app").innerHTML += `
            <div style="
                background: red;
                width: 100px;
                height: 50px;
                position: absolute;
                top: ${this.position}px"></div>
            `;
    }
  
    move() {
        if (this.position < 300) {
            this.position += 10;
        } else {
            this.position = 0;
        }
    }
}
  
class Circle {
    constructor() {
        this.position = 0;
    }

    draw() {
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

    move() {
        if (this.position < 300) {
            this.position += 10;
        } else {
            this.position = 0;
        }
    }
}


const figures = [ new Rect(), new Circle() ];
setInterval(() => {
    document.getElementById("app").innerHTML = "";
    for (let figure of figures) {
        figure.move();
        figure.draw();
    }
}, 200);
