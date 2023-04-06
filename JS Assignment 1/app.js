// Q1 :1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console


// let num1 = +prompt("Enter First Number: ")
// let num2 = +prompt("Enter second Number: ")


// if (num1 > num2) {

//     console.log(num1 + " is greater");
// }
// else {
//     console.log(num2 + " is greater");
// }

// Done

// ############################################################
// Q2 : Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign


// let num = +prompt("Enter Positive or negative integer : ")

// if (num > 0) {
//     console.log("The sign is positive");
// }
// else {
//     console.log("The sign is negative");
// }

// Done
// ################################################################
// Q3: Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console

// let n1 = +prompt("Enter 1st number: ")
// let n2 = +prompt("Enter 2nd number: ")
// let n3 = +prompt("Enter 3rd number: ")
// let n4 = +prompt("Enter 4th number: ")
// let n5 = +prompt("Enter 5th number: ")

// console.log(n1);
// console.log(n2);
// console.log(n3);
// console.log(n4);
// console.log(n5);

// if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
//     console.log(n1);
// }
// else if (n2 > n3 && n2 > n4 && n2 > n5) {
//     console.log(n2);
// } else if (n3 > n4 && n3 > n5) {
//     console.log(n3);
// } else if (n4 > n5) {
//     console.log(n4);
// } else {
//     console.log(n5);
// }

// DONE

// ####################################################################################

// Q4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the screen


// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is Even");
//     } else {
//         console.log(i + " is Odd");
//     }
// }


// DONE

// ####################################################################################

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding grade.

// let math = +prompt("Enter Your Maths Marks : ")
// let eng = +prompt("Enter Your English Marks : ")
// let urdu = +prompt("Enter Your Urdu Marks : ")
// let sci = +prompt("Enter Your Science Marks : ")
// let sst = +prompt("Enter Your SST Marks : ")

// let marksObt = math + eng + urdu + sci + sst
// let total = 500

// let percentage = (marksObt / total) * 100
// let grade;

// if (percentage >= 90 && percentage < 100) {
//     grade = "A"
// }
// else if (percentage >= 80 && percentage < 90) {
//     grade = "B"
// }
// else if (percentage >= 70 && percentage < 80) {
//     grade = "C"
// }
// else if (percentage >= 60 && percentage < 70) {
//     grade = "D"
// } else if (percentage < 60) {
//     grade = "F"
// } else {
//     grade = "Invalid Data"
// }

// if (grade === "Invalid Data") {
//     console.log("Please Insert a valid Data!");
// } else {
//     console.log("You got " + marksObt + "out of " + total);
//     console.log("Your have " + percentage + "% and Grade is " + grade);
// }

// DONE

// ####################################################################################


// Q6: Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }

// DONE

// ####################################################################################


// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *



// Note* :This program is not perfectly work on console so that i am printing on the document 👍
// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write("*");
//          console.log("*");
//     }
//      console.log("\n");
//     document.write("<br>");
// }




