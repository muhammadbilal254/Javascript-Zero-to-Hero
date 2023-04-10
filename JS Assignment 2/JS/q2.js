

// Q2:  Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


function search(value, arr, index = 0) {

    if (index == arr.length) { // agr index array ki length k equal ho jaye
        return false
    }
    if (arr[index] == value) { // agr value find ho jaye
        return true
    }
    return (value, arr, index + 1) // call it self



}

arr = [14, 13, 15, , 26, 15, 18, 20]
var findValue = +prompt("Enter Value to found")
let result = search(findValue, arr)
if (result === 1) {
    console.log(true);
}
else {
    console.log(false);
}


