let count = 0;


let minusBtn = document.querySelector('#minus-btn')
let plusBtn = document.querySelector('#plus-btn')
let resetBtn = document.querySelector('#reset-btn')
let counterElement = document.querySelector('#counter')


function increase() {
    count++
    counterElement.innerHTML = count
}

function decrease() {
    count--
    counterElement.innerHTML = count
}

function reset() {
    count = 0
    counterElement.innerHTML = count
}


minusBtn.addEventListener('click', decrease);
plusBtn.addEventListener('click', increase);
resetBtn.addEventListener('click', reset);





