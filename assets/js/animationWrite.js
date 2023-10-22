const element = document.querySelector('#typing')

const typing = (element) => {
    const text = element.innerHTML.split('')
    element.innerHTML = ''

    text.forEach((letter, i) => {
        setTimeout(() => (element.innerHTML+=letter), 100 * i) 
    });

    setInterval(() => typing(element), 7000)
}

typing(element)