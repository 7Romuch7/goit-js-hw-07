const refs = {
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};
refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onRenderBtnClick() {
    let amount = document.querySelector('#controls input').value;
    createBoxes(amount);
}

function createBoxes(amount) {
    let firstSize = 30;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        let size = firstSize + i * 10;
        let div = document.createElement('div');
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
}
function random() {
    return Math.floor(Math.random() * 256);
}
function onDestroyBtnClick(event) {
    boxes.innerHTML = '';
}
