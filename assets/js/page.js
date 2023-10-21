import pageSolution from "./components/pageSalution.js"
import solutionData from "./data/pageData.js"
import page from "../js/main.js"

const root = document.getElementById('root')

root.insertAdjacentHTML('beforeend', pageSolution(solutionData[page]))

