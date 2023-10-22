import pageSolution from "./components/pageSalution.js"

const root = document.getElementById('root')
const buttonBack = document.querySelector('#btn')

const myData = JSON.parse(localStorage.getItem('myData'))

if (myData) {
    root.insertAdjacentHTML('beforeend', pageSolution(myData));
} 

buttonBack.addEventListener('click', () => window.location.href = '../../index.html')