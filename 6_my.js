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

    static collision_map = [];
    static count = 0;

    static Computer(figures) {
        
        let temp = figures.map((item, index) => {
            return figures.map((item_q, index_q) => {
                let isColl = false;
                if (index_q !== index) {
                    let diff = Math.sqrt(Math.pow(item.positionX - item_q.positionX, 2) + Math.pow(item.positionY - item_q.positionY, 2));
                    if (diff < 50) {
                        isColl = true;
                    }
                    return isColl;
                }
            });
        });
        console.log(temp, this.collision_map);
        if (this.collision_map.length) {
            for (let i = 0; i < temp.length; i++) {
                for (let j = i; j < temp[i].length; j++) {
                    if (this.collision_map[i][j] !== temp[i][j]) {
                        if (this.collision_map[i][j]) {
                            this.count++;
                        }
                        this.collision_map[i][j] = temp[i][j];
                    }
                }
            }
        } else {
            this.collision_map = temp;
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

setInterval(() => {
    document.getElementById("app").innerHTML = "";

    for (let figure of figures) {
        figure.move();
        figure.draw();
    }
    
    Figure.Computer(figures);
    let table = document.getElementById('table');
    table.innerHTML = '';
    let capt = document.createElement('caption');
    capt.innerHTML = 'Таблица столкновений';
    table.appendChild(capt);

    let fir_row = document.createElement('tr');
    let thd = document.createElement('td');
    thd.innerHTML = '№';
    fir_row.appendChild(thd);
    
    for (let i = 0; i < figures.length; i++) {
        thd = document.createElement('td');
        thd.innerHTML = `${i}`;
        fir_row.appendChild(thd);
    }
    table.appendChild(fir_row);

    Figure.collision_map.forEach((item, index) => {
        let row = document.createElement('tr');
        let fir_col = document.createElement('td');
        fir_col.innerHTML = `${index}`;
        row.appendChild(fir_col);

        item.forEach((it) => {
            let td = document.createElement('td');
            td.innerHTML = it;
            it ? td.style.background = '#8f509d' : td.style.background = `#4b9e41`;
            row.appendChild(td);
        })
        table.appendChild(row);
    })

    let counter = document.getElementById("counter");
    counter.innerHTML = '';
    counter.innerHTML = `${Figure.count}`;
}, 200);