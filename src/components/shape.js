// // declare class

// // export class using module.exports

// class Shape{
//     constructor(){
//         this.color = "red";
//     }

//     drawShape(){
//         console.log("shape drawn");
//     }
//     calculateArea(){
//         console.log("Area calucted")
//     }
// }

// module.exports = {
//     Shape : Shape
// }

// declare class

let Shape = class {

    drawShape() {

        console.log("Drawing Shape");

    }

    calculateArea() {

        console.log("calculating Area");

    }

    color(rang) {

        console.log(`filling in the ${rang}`);

    }

}


 

// export class using module.exports

module.exports = Shape;
