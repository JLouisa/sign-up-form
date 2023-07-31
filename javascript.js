const pwd1 = document.querySelector('#pwd');
const pwd2 = document.querySelector('#pwdc');
const pwdPop = document.querySelector('.pwdPopup');

pwd2.addEventListener('input', updateValue2);
pwd1.addEventListener('input', updateValue);

let comp1;
let comp2;

function updateValue(e) {
    comp1 = e.target.value;
  };

function updateValue2(e) {
    comp2 = e.target.value;
    if(comp1 == comp2) {pwd2.setAttribute('style', "background-color: #5cd55c62;");pwdPop.textContent = ""} 
    else {pwd2.setAttribute('style', "background-color: #d55c5e6b;"); pwdPop.textContent = "*Passwords do not match"}
  };


