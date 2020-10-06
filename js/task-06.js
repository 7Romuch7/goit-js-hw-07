const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (
        validationInput.value.length < validationInput.dataset.length ||
        validationInput.value.length > validationInput.dataset.length
    ) {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    } else {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
}
