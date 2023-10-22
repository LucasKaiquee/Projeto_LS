const element = document.querySelector('#typing');

const typing = (element) => {
    const text = element.innerHTML.split('');
    element.innerHTML = '';

    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text[i];
            i++;
        } else {
            clearInterval(interval); 
            setTimeout(() => {
                typing(element); 
            }, 7000);
        }
    }, 100);
};

typing(element);
