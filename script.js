const amount = document.getElementById('totalAmount')
const noOfPeople = document.getElementById('noOfPeople')
const tip = Array.from(document.getElementsByName('tip'))
const generateBill = document.getElementById('generateBill')
const rstBtn = document.getElementById('rstBtn')
let finalTip;

//<=======code to generate bill starts=======>

generateBill.addEventListener('click', () => {
    for (let e of tip) {
        if (e.checked === true) {
            finalTip = e.value
        }
    }
    console.log(totalAmount.value, finalTip, noOfPeople.value)
    if (rstBtn.style.display === 'none') {
        rstBtn.style.display = 'inline'
    } else {
        rstBtn.style.display = 'none'
    }
})

//<=======code to generate bill ends=======>

// <======= code to reset calculation form starts=======>

rstBtn.addEventListener('click', () => {
    amount.value = '';
    noOfPeople.value = '';
    document.querySelector('input[name="tip"]:checked').checked = false;
})

// <======= code to reset calculation form ends=======>