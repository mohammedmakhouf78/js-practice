let resources = document.querySelector("#resources")
for (let i = 1; i <= 15; i++) {
    resources.innerHTML += `
        <div class="resource">
            <img src="./images/dalel/${i}.jpeg" alt="">
        </div>
    `
}