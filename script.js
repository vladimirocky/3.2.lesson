
const border = 500;

class Figure {
    constructor(x,y,isRight, isDown, color) {
        this.positionX = x;
        this.positionY = y;
        this.isRight = isRight;
        this.isDown = isDown;
        this.color = color;
        this.rotate = 0;
    }

    static collision_map = [];
    static coll_count = 0;

    draw () {}

    move () {

        if (this.positionX >= border - 50) this.isRight = false;
        if (this.positionX <= 2) this.isRight = true;
        this.isRight ? this.positionX++ : this.positionX--;

        if (this.positionY >= border - 50) this.isDown = false;
        if (this.positionY <= 2) this.isDown = true;
        this.isDown ? this.positionY++ : this.positionY--;
    }

    get X (){
        return this.positionX;
    }

    get Y () {
        return this.positionY;
    }

    static diff (fig_1, fig_2) {
        return Math.sqrt(Math.pow(fig_1.X - fig_2.X,2) + Math.pow(fig_1.Y - fig_2.Y,2));
    }
    static collision(figures) {

        let temp = figures.map((item_q, index_q) => {
            return figures.map((item_w, index_w) => {
                let isColl = false;
                if (index_w !== index_q && this.diff(item_q, item_w) < 50) isColl = true;
                return isColl;
            })
        })
        if (this.collision_map.length) {
            for (let i = 0; i < temp.length; i++) {
                for (let j = i; j < temp[i].length; j++) {
                    if (this.collision_map[i][j] !== temp[i][j]) {
                        if (this.collision_map[i][j]) {
                            this.coll_count++;
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

class Rectangle extends Figure {
    draw() {
        document.getElementById('app').innerHTML += `
        <div style="
            background: ${this.color};
            width: 50px;
            height: 50px;
            position: absolute;
            left: ${this.positionX}px;
            top: ${this.positionY}px"><div>
        `;
    }
}

class Circle extends Figure {
    draw() {
        document.getElementById('app').innerHTML += `
        <div style="
            background: ${this.color};
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            left: ${this.positionX}px;
            top: ${this.positionY}px"><div>
        `;
    }
}

class Triangle extends Figure {

    draw() {
        document.getElementById('app').innerHTML += `
        <div style="
            width: 0;
            height: 0;
            border-left: 25px solid transparent;
            border-right: 25px solid transparent;
            border-bottom: 50px solid ${this.color};
            position: absolute;
            transform: rotate(${this.rotate}turn);
            left: ${this.positionX}px;
            top: ${this.positionY}px"><div>
        `;
    }

    move() {
        super.move();
        (this.isRight) ? this.rotate += 0.01 : this.rotate -= 0.01;
    }
}


let figures = [
    new Rectangle(0,300,true,true, '#158078'),
    new Rectangle(320,300,false,true, '#8f509d'),
    new Circle(30,400,true,false, '#395778'),
    new Circle(230,40,false,false, '#4b9e41'),
    new Triangle(300,40,true,false, '#ee5fef'),
    new Triangle(200,400,true,false, '#ee5fef')
]

let table = document.getElementById('table')
let counter = document.getElementById('counter')

setInterval(() => {
    document.getElementById('app').innerHTML = '';

    for (let figure of figures) {
        figure.draw();
        figure.move();
    }

    Figure.collision(figures);

    table.innerHTML = ''
    let capt = document.createElement('caption')
    capt.innerText = 'Таблица столкновений'
    table.appendChild(capt);

    let fir_row = document.createElement('tr');
    let thd = document.createElement('td');
    thd.innerText = '№'
    fir_row.appendChild(thd);
    for (let i = 0; i < figures.length; i++){
        thdd = document.createElement('td');
        thdd.innerText = `${i}`;
        fir_row.appendChild(thdd);
    }
    table.appendChild(fir_row);

    Figure.collision_map.forEach((item, index) => {
        let row = document.createElement('tr');
        let fir_col = document.createElement('td');
        fir_col.innerText = `${index}`;
        row.appendChild(fir_col);

        item.forEach((it) => {
            let td = document.createElement('td');
            td.innerText = it;
            it ? td.style.background = '#8f509d' : td.style.background = '#4b9e41'
            row.appendChild(td);
        })
        table.appendChild(row);
    })

    counter.innerText = `Количество коллизий = ${Figure.coll_count}`;

}, 100)
