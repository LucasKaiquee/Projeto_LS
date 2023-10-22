import serviceCard from "./components/serviceCard.js"
import serviceData from "./data/data.js"
import solutionData from "./data/pageData.js"
import Swal from "sweetalert2"

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
const inputIitem = document.querySelectorAll('.input-item')

from.addEventListener('submit', () => {
    Swal.fire({
        icon: 'success',
        title: 'Obrigado !',
        showConfirmButton: false,
        timer: 1500
      })

      inputIitem.forEach((item) => {
        item.value = ''
      })
})