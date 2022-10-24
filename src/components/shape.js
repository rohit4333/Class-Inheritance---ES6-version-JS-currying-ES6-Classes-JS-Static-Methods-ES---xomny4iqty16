// declare class

// export class using module.exports

class Shape{
    constructor(){
        this.color = "red";
    }

    drawShape(){
        console.log("shape drawn");
    }
    calculateArea(){
        console.log("Area calucted")
    }
}

module.exports = {
    Shape : Shape
}
