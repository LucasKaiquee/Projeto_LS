const pageSolution = (solutionType) => {
    return `    
        <section class="solution-description">
                <h1>${solutionType.title}</h1>
        
                <div class="solution-content">
                    <div class="solution-info">
                        <p>${solutionType.para1}</p>
                    </div>
            
                    <div class="solution-info-2">
                        <p>${solutionType.para2}</p>
                    </div>
                </div>
        
        </section>
        <div class="page-content">
            <h2>Como a Securitas Environment pode te ajudar ? </h2>
            <div class="page-info">
                <p>Ao facilitar a monitorização do consumo de recursos, a redução do desperdício e a adoção de práticas eco-amigáveis, nossa empresa inspira ações ecológicas, capacitando indivíduos a fazerem escolhas informadas e positivas em prol do nosso planeta.
                </p>
    
                <a href="" class="btn">Contate-nos</a>
            </div>
    
            <h5>Confira nossas dicas.</h5>
    
            <div class="iframe">
            ${solutionType.iframe}
            </div
        </div>
    `
}

export default pageSolution