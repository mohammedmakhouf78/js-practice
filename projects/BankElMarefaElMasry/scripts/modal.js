let open1Btn = document.querySelectorAll("button[data-modal1]")
let open2Btn = document.querySelectorAll("button[data-modal2]")

let close1Btns = document.querySelectorAll("#mymodal1 .closeBtn")
let close2Btns = document.querySelectorAll("#mymodal2 .closeBtn")

let modal1 = document.querySelector("#mymodal1")
let modal2 = document.querySelector("#mymodal2")

console.log(modal1.children);
close1Btns.forEach(btn => {
    btn.addEventListener('click', function () {
        modal1.classList.remove('active')
        modal1.children[1].pause()
        modal1.children[1].currentTime = 0
    })
})

open1Btn.forEach(btn => {
    btn.addEventListener('click', function () {
        modal1.classList.add('active')
    })
})

close2Btns.forEach(btn => {
    btn.addEventListener('click', function () {
        modal2.classList.remove('active')
        modal2.children[1].pause()
        modal2.children[1].currentTime = 0
    })
})

open2Btn.forEach(btn => {
    btn.addEventListener('click', function () {
        modal2.classList.add('active')
    })
})