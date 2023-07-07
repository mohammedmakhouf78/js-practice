let choices = document.querySelectorAll(".main .left .choice")

let choicesArr = [
    {
        id: 1,
        img: "./images/opening_book.jpeg"
    },
    {
        id: 2,
        img: "./images/girl_lab.jpeg"
    },
    {
        id: 3,
        img: "./images/guy_typing.jpeg"
    },
    {
        id: 4,
        img: "./images/kid_typing.jpeg"
    },
]

choices.forEach(choice => {
    choice.addEventListener('click', function (e) {
        let id = this.dataset.id
        let item = choicesArr.find(item => item.id == id)

        const appElement = document.getElementById("app")

        appElement.style.backgroundImage = `
        url("${item.img}")
        `

        const addressElement = document.getElementById("address")

        addressElement.innerHTML = item.text

        addressElement.classList.remove("search-address")

        if (item.id == 4) {
            addressElement.classList.add("search-address")
        }
    })
})