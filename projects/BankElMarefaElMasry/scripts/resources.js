let resources = document.querySelector("#resources")
for (let i = 1; i <= 24; i++) {
    resources.innerHTML += `
        <div class="resource">
            <img src="./images/resources/${i}.jpeg" alt="">
        </div>
    `
}