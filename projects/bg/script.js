const btn = document.getElementById('btn')
const body = document.getElementById('body')

let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

btn.addEventListener('click', function () {
    let color = ""
    for (let i = 1; i <= 8; i++) {
        color += hex[Math.floor(Math.random() * (hex.length))]
    }

    body.style.backgroundColor = "#" + color
})