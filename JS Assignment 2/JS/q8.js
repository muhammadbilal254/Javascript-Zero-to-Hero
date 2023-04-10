

// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. 

// The function should also retrieve the object from localStorage
// and return it as a new object.


function saveData(obj) {

    let keys = Object.keys(obj)

    keys.forEach(function (key, index) {

        // console.log(key, obj[key]);

        localStorage.setItem(key, obj[key])
    })

    let newObj = {}
    keys.forEach(function (key, index) {

        // console.log(key, obj[key]);
        // let data = localStorage.getItem()
        let value = localStorage.getItem(key)

        newObj[key] = obj[key]

    })

    return newObj


}

let obj = {

    name: "Bilal",
    id: 115
}

let retrieve = saveData(obj)
console.log(retrieve);




