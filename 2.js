// Цель: нарисовать фигуру - красный прямоугольник, который двигается вертикально
// Решение: добавить метод в класс
class Rect {
    constructor() { // конструктор
        this.position = 0; // инкапсуляция
    }

    draw() {
        document.getElementById("app").innerHTML = `
        <div style="
            background: red;
            width: 100px;
            height: 50px;
            position: absolute;
            top: ${this.position}px"></div>
        `;
    }
    // если не достигли границы 300
    // вернемся назад
    move() {
        if (this.position < 300) {
            this.position += 10;
        } else {
            this.position = 0;
        }
    }
}
let rect = new Rect();
setInterval(() => {
    rect.move();
    rect.draw();
}, 200);
