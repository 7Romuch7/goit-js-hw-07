const refs = {
    inputFontSize: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text'),
};
refs.inputFontSize.addEventListener('input', onChangeFontSize);
function onChangeFontSize(event) {
    refs.spanText.style.fontSize = event.currentTarget.value + 'px';
}
