// //Class
// //template for a JS objects

// class Rectangle {
//     constructor(length, width) {
//         this.length = length;
//         this.width = width;
//     }

//     area() {
//         return this.length * this.width;
//     }
// }

// // const myRect = new Rectangle(10, 4)
// // console.log(myRect.area())

// class Square extends Rectangle {
//     constructor(length, perimeter) {
//         super(length, length) //it calls the parent's constructor with the values
//         this.squareLength = length
//         this.perimeter = perimeter;
//     }

//     //inherit the area method here

//     scream() {
//         console.log(`I AM A SQUARE OF LENGTH ${this.squareLength}`)
//         console.log(`I AM A SQUARE OF CIRCUMFERENCE ${this.perimeter}`)
//     }
// }

// const mySquare = new Square(5, 10);
// // console.log(mySquare.area())
// mySquare.scream()

