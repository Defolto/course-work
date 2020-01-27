const input = document.querySelector(`aside`);
let anima = document.querySelector(`#object_animation`);
const RELOAD = document.getElementById('reload');

// Создание анимации
function createAnim() {
    anima.style.animationDuration = document.getElementById('speed').value + document.getElementById('timeSpeed').value;

    anima.style.animationDelay = document.getElementById('delay').value + document.getElementById('delaySpeed').value;

    if (!InfinityDelay.checked) {
        anima.style.animationIterationCount = document.getElementById('count').value;
    }else{
        anima.style.animationIterationCount = 'infinite';
    }

    anima.style.animationDirection = document.getElementById('direction').value;

    // FIXME: не работает функция бейзера (не записывается в style)
    if (!Beziers.checked) {
        anima.style.animationTimingFunction = document.getElementById('productFunction').value;
    }else{
        anima.style.animationTimingFunction = document.getElementById('productFunction1').value;
    }

    
}

// Перезапуск анимации
function reload() {
    let object = document.querySelector('.block-object').innerHTML;
    anima.remove();
    document.querySelector('.block-object').insertAdjacentHTML("beforeend", object);
    anima = document.querySelector(`#object_animation`);
}

// Слушатели изменений
input.addEventListener("keyup", createAnim);

input.addEventListener("click", createAnim);

RELOAD.addEventListener('click', reload)