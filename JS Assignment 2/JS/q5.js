

// Q5 : Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

function changeBackgroundColor(element, colorName) {
    let root1 = document.getElementById(element)
    // root.style.backgroundColor = colorName
    // root1.style.width = "50%"
    root1.style.backgroundColor = colorName
}

changeBackgroundColor("root", "red")





