let resources = document.querySelector("#resources")
for (let i = 1; i <= 17; i++) {
    resources.innerHTML += `
        <div class="resource">
            <img src="./images/coming/${i}.jpeg" alt="">
        </div>
    `
}