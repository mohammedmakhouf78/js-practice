const next = document.getElementById("next")
const prev = document.getElementById("prev")


next.addEventListener('click', function () {
    const questions = document.getElementsByClassName('question')
    let activeIndex = -1
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].classList.contains('active')) {
            activeIndex = i
        }
    }

    if (activeIndex + 1 < questions.length) {
        questions[activeIndex].classList.remove('active')
        questions[activeIndex + 1].classList.add('active')
    }
})

prev.addEventListener('click', function () {
    const questions = document.getElementsByClassName('question')
    let activeIndex = -1
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].classList.contains('active')) {
            activeIndex = i
        }
    }

    if (activeIndex - 1 >= 0) {
        questions[activeIndex].classList.remove('active')
        questions[activeIndex - 1].classList.add('active')
    }
})


