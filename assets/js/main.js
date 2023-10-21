import serviceCard from "./components/serviceCard.js"
import serviceData from "./data/data.js"

const nav = document.querySelector(".nav")
const hamburger = document.querySelector(".hamburger")
const containerService = document.getElementById('container-service')
const itemMenu = document.querySelectorAll(".item-menu")
const buttonPage = document.querySelectorAll(".buttonPage")


serviceData.map((service) => {
    containerService.insertAdjacentHTML('beforeend', serviceCard(service))
})

hamburger.addEventListener("click", () => nav.classList.toggle("active"))

itemMenu.forEach((item) => {
    item.addEventListener('click', () => nav.classList.toggle("active"))
})
buttonPage.map((buttonPage, key) => {
    buttonPage.addEventListener('click', teste =  () => {
        let page = 0
        page = key
        return page
    })
})

export default teste
