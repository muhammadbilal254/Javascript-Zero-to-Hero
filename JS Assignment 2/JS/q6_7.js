


// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function storeData(key, obj) {
    let stringify = JSON.stringify(obj)
    localStorage.setItem(key, stringify)
}


// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function retrieveData(id) {
    let data = localStorage.getItem(id)
    return data ? JSON.parse(data) : ""
}






let student1 = {
    name: "Muhammad Bilal",
    id: "115",
    className: "Bechlors",
    department: "CS"
}

storeData("std", student1)
console.log(retrieveData("std"))