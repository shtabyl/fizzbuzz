let button = document.querySelector('.section__button');
let resultField = document.querySelector('.section__results');

function fizzBuzz(n) {
    for (let i = 1; i < n + 1; i++) {
        let dividedByThree = i % 3;
        let dividedByFive = i % 5;
        if (dividedByThree && dividedByFive == 0) {
            console.log('FizzBuzz');
        } else {
            if (dividedByThree == 0) {
                console.log('Fizz');
            } else if (dividedByFive == 0) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }
    }
}