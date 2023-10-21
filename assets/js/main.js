import serviceCard from "./components/serviceCard.js"
import serviceData from "./data/data.js"

const nav = document.querySelector(".nav")
const hamburger = document.querySelector(".hamburger")
const containerService = document.getElementById('container-service')
const itemMenu = document.querySelectorAll(".item-menu")

serviceData.map((service) => {
    containerService.insertAdjacentHTML('beforeend', serviceCard(service))
})

hamburger.addEventListener("click", () => nav.classList.toggle("active"))

itemMenu.forEach((item) => {
    item.addEventListener('click', () => nav.classList.toggle("active"))
})
