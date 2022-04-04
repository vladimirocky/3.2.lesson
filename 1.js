// Цель: нарисовать фигуру - красный прямоугольник
// Решение: создать класс
class Rect {
  // метод
  draw() {
    document.getElementById("app").innerHTML = `
      <div style="
        background: red;
        width: 100px;
        height: 50px;"></div>
    `;
  }
}
// создадим экземпляр класса
let rect = new Rect();
// вызов метода
rect.draw();
