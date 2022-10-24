// import using require

// declare class


// export class using module.exports

let Shape = require("./shape");

class Circle extends Shape{
    calculateArea(){
        console.log("first")
    }
}


module.exports = {
    Circle : Circle
}
