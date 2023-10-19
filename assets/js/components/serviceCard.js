const serviceCard = (service) => {
    return `
    <div class="mini-services flex flex-col bg-[#131212] w-[90%] h-full justify-around gap-5 m-[30px] p-5">
        <h2 class="text-2xl"><span>¨${service.name}</span></h2>
        <p class="text-[white]">${service.description}</p>
        <a href="${service.path}" class="vermais-serv flex items-center justify-center w-[150px] h-10 no-underline text-sm text-black bg-[#13ED9F] font-bold rounded-[10px] hover:transition-[0.3s] hover:scale-110">Ver mais</a>
    </div>
    `
}

export default serviceCard