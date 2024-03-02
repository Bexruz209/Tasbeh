let ekran = document.querySelector('.ekran');
let button = document.querySelector('.emmer__button');
let buton = document.querySelector('.emmer_button')

let i = 0;
let a = 0;

button.onclick = () => {
    ekran.innerHTML = i += 1
    if (ekran.innerHTML == 100) {
        alert('Siz 99 marta zikr aytiz')
        ekran.innerHTML = i = 0
    }
}

buton.onclick = () => {
    ekran.innerHTML = i = 0
}