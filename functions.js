//Function
//set a statements that performs a task
//definition
//function keyword followed by:
//1. function name
//2. list of arguments (optional)
//3. block of code that defines the function

//add two numbers

// function add(a, b) {
//     console.log(a)
//     console.log(b)
//     return a + b
// }

// console.log(add(3, 4))

//Flexibility - while calling, we can pass any number of arguments

// console.log(add(3))

// console.log(add(3, 4, 5, 6, 7, 8))


//Flexibility - we can define a function with any number of arguments which is not predefined
//Rest operator
// function myFunction(a, b, ...args) {
//     console.log(a)
//     console.log(b)
//     console.log(args)
// }

// myFunction(1, 2, 3, 4, 5, "asdn", ["a", 3])

//argument - special keyword - Array like object
// function myFunction(){
//     console.log(arguments)
//     const keysArray = Object.keys(arguments)
//     console.log(keysArray)
//     const length = keysArray.length;
//     console.log(length)
//     console.log(arguments[length - 1])
// }

// myFunction(1, 2, 3, "a")

//Anonymous Functions
//unnamed function - function without a name

// const printHello = function(a, b) {
//     console.log("Hello World!!", a, b)
// }

// printHello(1, 2)

//Example of anonymous function - map function
// const arr = [1, 2, 3]
// const returnDouble = function(item) {
//     return item * 2;
// }
// const newArr = arr.map(returnDouble)
// console.log(newArr)


//Closure - lexical environment - scope - when a function is created inside another function
// function parentFn() {
//     let a = 5;
//     function childFn() {
//         a = 10;
//         console.log(a)
//     }
//     return childFn
// }

// let childFunction = parentFn()
// childFunction()


//Arrow Functions - concise way to write functions using '=>' (fat arrow)
//writes less memory
// function add(a, b) {
//     return a + b
// }

// const add = (a, b) => a + b;

// console.log(add(1, 2))

//other variations of arrow function
//with no arguments
// const printHello = () => console.log("Hello")

// printHello()

//with one argument
// const printNumber = num => console.log(num)

// printNumber(5)

// const printHelloAndWord = () => {
//     console.log("Hello")
//     console.log("World")
// }

// printHelloAndWord()

// const addNumbers = (a, b) => {
//     console.log(a)
//     console.log(b)
//     return a + b;
// }
// addNumbers(1, 2)


//First-class Functions - functions are treated like any other variables
//1. assign functions to variables
//2. pass functions as arguments
//3. return functions from another function

//1. assign functions to variables
// const add = function(a, b) {
//     return a + b;
// }
// const add2 = add;
// console.log(add2(1, 2))

//2. pass functions as arguments - callbacks
// function add(a, b) {
//     console.log("add")
//     return a + b;
// }

// function subtract(a, b) {
//     console.log("subtract")
//     return a - b;
// }

// function calculate(a, b, cb) {
//     let result = cb(a, b)
//     return result
// }

// console.log(calculate(7, 3, add)) //cb = add
// console.log(calculate(7, 3, subtract)) // cb = subtract

//3. return functions from another function - closure
// function sumOfThree(a, b) {
//     console.log("...")
//     return function(c) {
//         const sum = a + b + c
//         return sum
//     }
// }

// let partialSum = sumOfThree(1, 2)
// //function sumOfThree creates a lexical environment with a=1, b=2 which can be accessed by partialSum

// let partialSum2 = sumOfThree(10, 12)
// //function sumOfThree creates another lexical environment with a=10, b=12 which can be accessed by partialSum2

// //do other codes
// let finalSum = partialSum(3)
// //a = 1, b =2, c = 3


// let finalSum2 = partialSum2(30)
//a=10, b=12, c=30

// let finalSum = (sumOfThree(1, 2))(3)
// let finalSum2 = (sumOfThree(10, 12))(30)

// console.log(finalSum)
// console.log(finalSum2)