let birthdayElement = document.querySelector('#birthday')
let calcBtn = document.querySelector("#calc")
let ageElement = document.querySelector("#age")

calcBtn.addEventListener('click', function () {
    let birthday = new Date(birthdayElement.value)
    let today = new Date(Date.now())
    let diff = today - birthday
    ageElement.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
})
