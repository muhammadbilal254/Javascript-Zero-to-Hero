

// Q4 : Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item


let list = document.getElementById('list')

function addlist() {

    let listItem = prompt("Enter List Item :")
    let node = document.createElement("li")
    let item = document.createTextNode(listItem)

    node.appendChild(item)
    list.appendChild(node)
}


