
// Q1: Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it.
//  For example, if the closure is created with 5, the returned function should add 5 to any number passed
// to it.


function add(num1) {
    return function (num2) {
        return num1 + num2
    }(5)

}
console.log(add(12));

// Example Explained
// The variable add is assigned to the return value of a self-invoking function.

// The self-invoking function only runs once. and returns a function expression.

// This way add becomes a function.

// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

// A closure is a function having access to the parent scope, even after the parent function has closed.

