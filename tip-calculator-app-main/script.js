const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector(".people-input");
const tips = document.querySelectorAll(".tips");
const tipPerson = document.querySelector("#tip-amount");
const tipTotal = document.querySelector("#total-amount");
const tipCustom = document.querySelector(".tip-custom");
const reset = document.querySelector(".reset");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleValueFun);
reset.addEventListener("click", resetFun)
tips.forEach(function(elem) {
    elem.addEventListener("click", addClass);
});

billInput.value = "0.0";
peopleInput.value = "1";
tipTotal.innerHTML = '$' + (0.0).toFixed(2);
tipPerson.innerHTML = '$' + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;
let totalTip = 0.0;
let totalPerson = 0.0;


function billInputFun() {
    billValue = parseFloat(billInput.value);
    calculateTip();
}

function tipCustomfun() {
    tipValue = parseFloat(tipCustom.value / 100);
    
    tips.forEach(function(elem) {
        elem.classList.remove("active-tip");
    });

    calculateTip();
}

function resetFun() {
    billValue = 0.0;
    peopleValue = 1;
    tipValue = 0.15;
    totalTip = 0.0;
    totalPerson = 0.0;

    billInput.value = "0.0";
    peopleInput.value = "1";
    tipTotal.innerHTML = '$' + (0.0).toFixed(2);
    tipPerson.innerHTML = '$' + (0.0).toFixed(2);
}

function addClass(event) {
    tips.forEach(function(elem) {
        elem.classList.remove("active-tip");
        
        if (event.target.innerHTML === elem.innerHTML) {
            elem.classList.add("active-tip");
            tipValue = parseFloat(elem.innerHTML) / 100;
        }
    });

    calculateTip();
}

function peopleValueFun() {
    peopleValue = peopleInput.value;

    calculateTip();
}


function calculateTip() {
    totalTip = billValue * tipValue;
    totalPerson = (billValue * tipValue) / peopleValue;

    tipTotal.innerHTML = '$' + (totalTip).toFixed(2);
    tipPerson.innerHTML = '$' + (totalPerson).toFixed(2);
}