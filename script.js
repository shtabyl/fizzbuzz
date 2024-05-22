let form = document.querySelector('.section__form');
let resultField = document.querySelector('.section__results');
let resultArr = [];

form.addEventListener('submit', function(event) {
    let n = document.querySelector('.section__input').value;
    fizzBuzz(n);
    let length = resultArr.length;
    for (let j = 0; j < length; j++) {    
        let par = document.createElement('p');
        par.textContent = resultArr[j];
        resultField.appendChild(par);
    }
    event.preventDefault();
})

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let dividedByThree = i % 3;
        let dividedByFive = i % 5;
        if (dividedByThree && dividedByFive == 0) {
            resultArr.push('FizzBuzz');
        } else {
            if (dividedByThree == 0) {
                resultArr.push('Fizz');
            } else if (dividedByFive == 0) {
                resultArr.push('Buzz');
            } else {
                resultArr.push(i);
            }
        }
    }
}