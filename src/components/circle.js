// // import using require

// // declare class


// // export class using module.exports

// let Shape = require("./shape");

// class Circle extends Shape{
//     constructor(){
//         super();
//     }
//     calculateArea(){
//         console.log("first")
//     }
// }


// module.exports = {
//     Circle : Circle
// }
const Shape = require('./shape');


 

// declare class

let Circle = class extends Shape {

    calculateArea() {

        console.log("Area Calculating for Circle");

    }

}



 

// export class using module.exports

module.exports = Circle;
