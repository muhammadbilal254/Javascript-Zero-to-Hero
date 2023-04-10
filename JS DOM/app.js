

let my_para = document.getElementById("my_para")

// my_para.innerText = "Pakistan Zindabad"
my_para.innerHTML = "<b>Pakistan Zindabad</b>"
my_para.style.backgroundColor = "brown"
my_para.style.fontSize = "18px"
my_para.style.transition = "all .5s ease-in"
my_para.style.color = "white"


setInterval(function () {
    if (my_para.style.backgroundColor === "green") {

        my_para.style.backgroundColor = "brown"
    } else {
        my_para.style.backgroundColor = "green"

    }
}, 1000)