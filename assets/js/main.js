import serviceCard from "./components/serviceCard.js"
import serviceData from "./data/data.js"
import solutionData from "./data/pageData.js"

const nav = document.querySelector(".nav")
const hamburger = document.querySelector(".hamburger")
const containerService = document.getElementById('container-service')
const itemMenu = document.querySelectorAll(".item-menu")

serviceData.map((service) => {
    return containerService.insertAdjacentHTML('beforeend', serviceCard(service))
})

hamburger.addEventListener("click", () => nav.classList.toggle("active"))

itemMenu.forEach((item) => {
    item.addEventListener('click', () => nav.classList.toggle("active"))
})

document.addEventListener('DOMContentLoaded', () => {
    const buttonPage = document.querySelectorAll(".button-page");

    buttonPage.forEach((buttonPage, index) => {
        buttonPage.addEventListener('click', () => {
            const key = JSON.stringify(solutionData[index])
            localStorage.setItem('myData', key)

            window.location.href = '../../pages/page.html'
        })
    })
});

const from = document.querySelector('form')

from.addEventListener('submit', () => {
    window.alert('teste')
})