let billAmount = document.querySelector("#bill_amount")
let percentage = document.querySelector("#percentage")
let calcBtn = document.querySelector("#calc")
let totalElement = document.querySelector("#total") // div

calcBtn.addEventListener('click', function () {
    let bAmount = parseInt(billAmount.value)
    let perc = parseInt(percentage.value)
    let total = bAmount + ((perc / 100) * bAmount)

    console.dir(totalElement);
    totalElement.textContent = total
})