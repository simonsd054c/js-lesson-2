//Hoisting
//JS Default Behaviour
//hoists declarations and not the assignment of the variables to the top of the scope

//In case of var, hoists the decalaration and initializes it with undefined
//normal flow
// {
//     var a = 5;
//     console.log(a)
// }

// {
//     console.log(a)
//     var a = 5;
// }

//The above code is similar to below
// {
//     var a;
//     console.log(a)
//     a = 5;
// }

//let
//In case of let and const, hoists the declarations but do not initialize it
// {
//     console.log(a)
//     let a = 5;
// }
//The above code is NOT similar to the below
// {
//     let a;
//     console.log(a)
//     a = 5;
// }

//function hoisting
// function add(a, b) {
//     return a + b;
// }

// console.log(add(1, 2))

//lets try hoisting
// console.log(addAnotherVariable(3))

// function addAnotherVariable(c) {
//     let sum = add(1, 2)
//     sum += c
//     return sum
// }

// function add(a, b) {
//     // console.log(a)
//     // console.log(b)
//     return a + b;
// }

//hoisting leads to an interesting thing call TDZ(Temporal Dead Zone)
//TDZ only applies to let and const
//TDZ is a zone which starts at the top of the scope and ends with the declaration of the variable
// {//TDZ starts from here
//     // console.log(a)
//     let a = 5; //For a, TDZ ends here
//     console.log(a)
//     let b = 6;// For b, TDZ ends here
// }

// {//TDZ starts here
//     const func = () => console.log(letVar)

//     let letVar = 4; // For letVar, TDZ ends here
//     func()
// }