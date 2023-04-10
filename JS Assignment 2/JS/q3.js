
//Q3 : Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.



let root = document.getElementById("root")


function addParagraph(paragraph) {
    let node = document.createElement("p")
    let textNode = document.createTextNode(paragraph)
    node.appendChild(textNode)
    root.appendChild(node)
}

function callByonClick() {
    let text = prompt("Enter Your Paragraph")
    addParagraph(text)
}

// addParagraph("My name is Bilal")
