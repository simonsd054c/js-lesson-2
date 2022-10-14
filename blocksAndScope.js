// {
//     var a = 5;
//     let b = 6;
//     const c = 7;
// }
// console.log(a)
// console.log(c)

//var has two scopes: 
//1. the function inside which it is defined, it is available anywhere within that function
//2. if it is defined outside a function, then it is a global variable

//let and const has one scope:
//1. the block in which it is defined

// function myCoolFunction() {
//     d = "5";
//     if(true) {
//         var a = 5;
//         let b = 6;
//         const c = 7;
//     }
//     // console.log(d)
// }
// myCoolFunction()

// console.log(globalThis.d)

// var a = 5; // can be accessed as window.a (browsers) and globalThis.a (all other cases)

// let number1 = 5;
// let number2 = 6;
// number = 6;

// function add() {
//     number1 = 10;
//     number2 = 7;
//     return number1 + number2;
// }

// console.log(add())