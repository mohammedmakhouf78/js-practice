const btn = document.getElementById('btn')
const body = document.getElementById('body')
const colorElement = document.getElementById("color")

let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

btn.addEventListener('click', function () {
    let color = ""
    for (let i = 1; i <= 8; i++) {
        color += hex[Math.floor(Math.random() * (hex.length))]
    }

    body.style.backgroundColor = "#" + color
})

colorElement.addEventListener('input', function () {
    body.style.backgroundColor = colorElement.value
})

console.dir(colorElement);