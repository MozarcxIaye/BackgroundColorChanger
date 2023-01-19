
const changeBtn = document.querySelector('#change')
const colorBtn = document.querySelector('#color')
const body = document.body


changeBtn.addEventListener('click',  changeBg)
function changeBg() {
    const color1 = getRandomRGB()
    const color2 = getRandomRGB()
    const color3 = getRandomRGB()

    const colorString = `rgb(${color1},${color2},${color3})`
    body.style.background = colorString
    colorBtn.innerText = colorString
}

function getRandomRGB() {
    return Math.floor(Math.random() * 256)
}