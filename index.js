let count = 0;


let minusBtn = document.querySelector('#minus-btn')
let plusBtn = document.querySelector('#plus-btn')
let resetBtn = document.querySelector('#reset-btn')
let counterElement = document.querySelector('#counter')


let buttons = document.querySelectorAll('.theme-buttons')




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


function changeTheme(event) {
   let classString = event.target.innerHTML;

   document.querySelector('body').className = classString
   document.querySelector('main').className = classString

   let allButtons = document.querySelectorAll('button')

   for (let i = 0; i < allButtons.length; i++) {
    let currentButton = allButtons[i]
    currentButton.classList = classString
    
   }

}


for (let i = 0; i < buttons.length; i++) {
    let currentBtn = buttons[i]

    currentBtn.addEventListener('click', changeTheme)
}




