// Objects


// let person = {
//     name: "Bilal",
//     age: 21,
//     cnic: 1234567890123,
//     eyeColor: "blue",
//     canSpeakEnglish: false,
//     speak: function (sentences) {
//         console.log(sentences, this.name);
//     }
// }

// console.log(person);
// console.log(person['name']);
// person.speak("Hello, I am ")



// Store data on local storage


let getStudents = localStorage.getItem("students")

let students = getStudents ? JSON.parse(getStudents) : []
function addStudents() {
    let student = {
        name: prompt("Enter Student Name"),
        age: prompt("Enter Student age"),
        className: prompt("Enter Class Name")
    }
    students.push(student)

    // to store it on local storage

    localStorage.setItem("students", JSON.stringify(students)) // stringify convert objects to string format and store it on local storage

    console.log(students);

}



