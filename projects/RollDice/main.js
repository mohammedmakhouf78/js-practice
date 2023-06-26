let rollDiceBtn = document.querySelector("#rollDiceBtn")
let count = 1

rollDiceBtn.addEventListener('click', function () {
    let randomDiceNumber = Math.floor(Math.random() * 6) + 1
    let diceImg = document.querySelector("#diceImg")

    diceImg.src = `./images/dice${randomDiceNumber}.png`

    let resultSection = document.querySelector("#resultSection")

    resultSection.innerHTML += `
        <div class="dice-result" style="transform: scale(0);">
            <span>Roll ${count}:</span>
            <img class="dice-img" src="./images/dice${randomDiceNumber}.png" alt="">
        </div>
    `

    rollDiceBtn.disabled = true

    anime({
        targets: diceImg,
        rotate: 360,
        complete: function (anim) {
            anim.reset()
            rollDiceBtn.disabled = false
        }
    })

    anime({
        targets: ".dice-result:last-child",
        scale: 1
    })

    count++
})