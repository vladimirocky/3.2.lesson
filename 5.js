// Цель: нарисовать три фигуры:
// красный прямоугольник, который двигается вертикально
// зеленый круг, который двигается горизонтально
// синий квалрат, который двигается по диагонали и вращается

// Решение: изменим только Square

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
                top: ${this.position}px;
                left: ${this.position}px"></div>
        `;
    }

    move() { // переопределение метода
        super.move(); // вызов родительского метода
        this.rotation += 0.1;
    }
}
