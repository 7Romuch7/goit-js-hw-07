const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
    console.log(this.value.length);
    if (validationInput.getAttribute('data-length') > this.value.length) {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    } else {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
}
