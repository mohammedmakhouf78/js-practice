let choices = document.querySelectorAll(".main .left .choice")

let choicesArr = [
    {
        id: 1,
        img: "./images/man_typing.jpeg"
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
        choices.forEach(item => {
            item.classList.remove('active')
        })


        if (this == choice) {
            this.classList.add('active')
        }

    })
})