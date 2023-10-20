const serviceCard = (service) => {
    return `
    <div class="card">
        <h2><span>${service.name}</span></h2>
        <p>${service.description}</p>
        <a href="${service.path}">Ver mais</a>
    </div>
    `
}

export default serviceCard