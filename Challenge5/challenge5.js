let numberOne = document.querySelector('.fNumber');
let numberTwo = document.querySelector('.sNumber');
let add = document.querySelector('.addition');
let subtract = document.querySelector('.subtraction');
let divide = document.querySelector('.division');
let remainder = document.querySelector('.modulus');
let multiply = document.querySelector('.multiplication');
let h2 = document.querySelector('.h2')
//let results = document.querySelector('form');

//results.addEventListener('submit', fetchResults);
add.addEventListener('click', fetchResults);
subtract.addEventListener('click', fetchResults);
divide.addEventListener('click', fetchResults);
remainder.addEventListener('click', fetchResults);
multiply.addEventListener('click', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    //console.log(e);
    //console.log(e.target.className);
let pTag = document.createElement('p');

h2.appendChild(pTag);

    if (e.target.className === 'addition') {
        //console.log(Number(numberOne.value) + Number(numberTwo.value));
        pTag.textContent = (Number(numberOne.value) + Number(numberTwo.value));  
    } else if (e.target.className === 'subtraction') {
        //console.log(Number(numberOne.value) - Number(numberTwo.value));
        pTag.textContent = (Number(numberOne.value) - Number(numberTwo.value));  
    } else if (e.target.className === 'division') {
       //console.log(Number(numberOne.value) / Number(numberTwo.value));
        pTag.textContent = (Number(numberOne.value) / Number(numberTwo.value));
    } else if (e.target.className === 'multiplication') {
        //console.log(Number(numberOne.value) * Number(numberTwo.value));
        pTag.textContent = (Number(numberOne.value) * Number(numberTwo.value));
    } else if (e.target.className === 'modulus') {
        //console.log(Number(numberOne.value) % Number(numberTwo.value));
        pTag.textContent = (Number(numberOne.value) % Number(numberTwo.value));
    }
};
