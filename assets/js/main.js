import serviceCard from "./components/serviceCard.js"
import serviceData from "./data.js"

const containerService = document.getElementById('container-service')

serviceData.map((service) => {
    console.log(service)
    containerService.insertAdjacentHTML('beforeend', serviceCard(service))
})

