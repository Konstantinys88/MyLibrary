'use strict'

class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.width * this.height;
    }
}

const square = new Rectangle(10,10);
const long = new Rectangle(20,100);

console.log(square.calcArea());
console.log(long.calcArea());

class ColoredRectangle extends Rectangle {
    constructor(height,width,text,bg) {
        super(height,width);
        this.text = text;
        this.bg = bg;
    }
    showMyProps() {
        console.log(`text ${this.text} bg ${this.bg}`);
    }
}

const div = new ColoredRectangle(12,12,"text","red");
div.showMyProps();
console.log(div.calcArea())