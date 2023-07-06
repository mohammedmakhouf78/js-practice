let choices = document.querySelectorAll(".details .choice")

console.log(choices);

let choicesArr = [
    {
        id: 1,
        text: `
            <p>متاح الآن النشر في مجلات الوصول الحر</p>
            <p>من خلال اتفاقية هيئة تمويل العلوم والتكنولوجيا والإبتكار</p>
            <p>وبنك المعرفة المصري مع Springer nature</p>
        `,
        img: "./images/labtob.jpeg"
    },
    {
        id: 2,
        text: `
            <p>ورش عمل لاعضاء هيئة التدريس في مصر</p>
            <p>مقدمة من اكاديميات نيتشر البحثيه بالتعاون</p>
            <p>,,هيئة تمويل العلوم وتكنولوجياالابتكار,,</p>
        `,
        img: "./images/labtob_and_holding_phone.jpeg"
    },
    {
        id: 3,
        text: `
            <p>جميع المواد الدراسية</p>
            <p>للمراحل الابتدائية والإعدادية</p>
            <p>والثانوية</p>
        `,
        img: "./images/kids rasing hands.jpeg"
    },
    {
        id: 4,
        text: `
            <h2 class="orange-title" style="color:white;">
                جرب محرك البحث الأكاديمي
                <br />
                أفضل رفيق لدراستك
            </h2>
            <input class="form-control custom-search-input" placeholder="ابحث هنا"/>
        `,
        img: "./images/opening_book.jpeg"
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