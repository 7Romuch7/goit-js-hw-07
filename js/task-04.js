const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    resultValue: document.querySelector('#value'),
};
let counterValue = 0;
const increment = () => {
    counterValue += 1;
    refs.resultValue.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    refs.resultValue.textContent = counterValue;
};

refs.incrementBtn.addEventListener('click', increment);
refs.decrementBtn.addEventListener('click', decrement);
