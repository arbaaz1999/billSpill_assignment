const amount = document.getElementById('totalAmount')
const noOfPeople = document.getElementById('noOfPeople')
const tip = Array.from(document.getElementsByName('tip'))
const generateBill = document.getElementById('generateBill')
const rstBtn = document.getElementById('rstBtn')
const tipAmntPerPerson = document.getElementById('tipAmntPerPerson')
const totalAmntPerPerson = document.getElementById('totalAmntPerPerson')
let finalTip;  // to store the tip percentage
let tipPerPerson; // to store the tip amount applicable to per person
let tipAmount; // to store the value of tip which converted from percentage to number
let amountPerPerson; // to store the total amount per person after adding the splitted tip



//<=======code to generate bill starts=======>
generateBill.addEventListener('click', () => {
    for (let e of tip) {
        if (e.checked === true) {
            finalTip = e.value;
        }
    }

    tipAmount = (finalTip / 100) * amount.value;
    tipPerPerson = (Number(tipAmount) / Number(noOfPeople.value)).toFixed(2);
    amountPerPerson = ((Number(tipAmount) + Number(amount.value)) / Number(noOfPeople.value)).toFixed(2);

    tipAmntPerPerson.innerText = '₹ ' + tipPerPerson;
    totalAmntPerPerson.innerText = '₹ ' + amountPerPerson

    if (rstBtn.style.display === 'none') {
        rstBtn.style.display = 'inline'
    } else {
        rstBtn.style.display = 'none'
    }
})
//<=======code to generate bill ends=======>



// <======= code to reset calculation form starts=======>
const resetFields = () => {
    amount.value = '';
    noOfPeople.value = '';
    document.querySelector('input[name="tip"]:checked').checked = false;
    tipAmntPerPerson.innerText = '₹ 0.00';
    totalAmntPerPerson.innerText = '₹ 0.00';
    rstBtn.style.display = 'none';

}
// <======= code to reset calculation form ends=======>