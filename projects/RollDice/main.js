let rollDiceBtn = document.querySelector("#rollDiceBtn")
let resultSection = document.querySelector("#resultSection")
let diceImg = document.querySelector("#diceImg")

const results = []


function rollDiceHandler(e) {
    let randomDiceNumber = Math.floor(Math.random() * 6) + 1

    results.push({
        "randomDiceNumber": randomDiceNumber,
    })

    diceImg.src = `./images/dice${randomDiceNumber}.png`

    render()

    document.querySelector(".dice-result:last-child").classList.add('animate')

    rollDiceBtn.disabled = true
    anime({
        targets: diceImg,
        rotate: 360,
        complete: function (anim) {
            anim.reset()
            rollDiceBtn.disabled = false
        }
    })
}

function deleteButtonHandler(e) {
    let index = e.dataset.index
    results.splice(index, 1)

    e.parentElement.classList.add("delete-animation")

    setTimeout(() => {
        render()
    }, 500)
}

function render() {
    resultSection.innerHTML = ""
    results.forEach((result, index) => {
        resultSection.innerHTML += `
            <div class="dice-result">
                <span>Roll ${index + 1}:</span>
                <img class="dice-img" src="./images/dice${result.randomDiceNumber}.png" alt="">
                <button class="btn btn-outline-danger delete" data-index="${index}" onClick="deleteButtonHandler(this)">-</button>
            </div>
        `
    });

    // anime({
    //     targets: ".dice-result:last-child",
    //     scale: 1,
    // })
}