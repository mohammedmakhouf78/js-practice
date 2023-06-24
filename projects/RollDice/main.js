let rollDiceBtn = document.querySelector("#rollDiceBtn")
let count = 1


rollDiceBtn.addEventListener('click', function () {
    let randomDiceNumber = Math.floor(Math.random() * 6) + 1
    let diceImg = document.querySelector("#diceImg")

    diceImg.src = `./images/dice${randomDiceNumber}.png`

    let resultSection = document.querySelector("#resultSection")

    resultSection.innerHTML += `
        <div class="dice-result">
            <span>Roll ${count}:</span>
            <img src="./images/dice${randomDiceNumber}.png" alt="">
        </div>
    `

    count++
})