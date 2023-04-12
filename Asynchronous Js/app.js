// // Sync Example
// alert("Done")
// console.log("hello");

// // Async Exmaple
// console.log("start");
// function runafter() {
//     setTimeout(() => {

//         console.log("Hello Pakistan");
//     }, 2000);
// }

// runafter()
// console.log("Hello World");

// setInterval(function () {
//     console.log(1);
// }, 2000)

// setTimeout(function () {
//     console.log("async 2");
// }, 2000)
// console.log("end");



// _______________________________________________________________________________________________________________________________________________


// Call Back
// function runafter(callback) {
//     setTimeout(() => {

//         console.log("Hello Pakistan");
//         // console.log(typeof callback); // get a type
//         let data = 5 + 123;
//         callback(data);
//     }, 2000);
// }

// function toBeExecutedWhenDone(returnData) {

//     alert("recieved", returnData)
// }

// runafter(toBeExecutedWhenDone)
// console.log("Hello World");

// _______________________________________________________________________________________________________________________________________________


// Promises

const ticket = new Promise(function (resolve, reject) {
    const isBoarded = true;
    if (isBoarded) {
        resolve('You are not in the Flight')
    }
    else {
        reject('your flight has been cancelled')
    }
})



ticket.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
}).finally(
    () => {
        console.log("always run");
    }

)











