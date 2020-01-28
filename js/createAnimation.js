const input = document.querySelector(`aside`);
let anima = document.querySelector(`#object_animation`);
const RELOAD = document.getElementById('reload');
document.querySelector('#object_animation').style.animationName = document.querySelector('#subtypes .row-nav__paragraph_active').id;

// Изменение объекта
function changeObject() {
    document.querySelector('.block-object').innerHTML = '';
    document.querySelector('main').classList.remove('fon__bg');
    switch (document.getElementById('type-object').value) {
        case 'text':
            document.querySelector('.block-object').insertAdjacentHTML("beforeend", '<p class="block-object__text object_animation" id="object_animation">Текст</p>');
            break;
        case '2d-object':
            document.querySelector('.block-object').insertAdjacentHTML("beforeend", '<div class="block-object__2d-object object_animation" id="object_animation"></div>');
            break;
        case 'img':
            document.querySelector('.block-object').insertAdjacentHTML("beforeend", '<img src="img/img.jpg" class="block-object__img object_animation" id="object_animation" alt="котик">');
            break;
        case 'btn':
            document.querySelector('.block-object').insertAdjacentHTML("beforeend", '<button class="block-object__btn object_animation" id="object_animation">Кнопка</button>');
            break;
        case 'bg':
            document.querySelector('.block-object').classList.add('object_animation');
            document.querySelector('.block-object').classList.add('fon__bg')
            document.querySelector('.block-object').setAttribute('id', 'object_animation');
            break;
        default:
            break;
    }
}

// Создание анимации
function createAnim() {
    changeObject();

    document.querySelector('#object_animation').style.animationName = document.querySelector('#subtypes .row-nav__paragraph_active').id;
    anima = document.querySelector(`#object_animation`);
    anima.style.animationDuration = document.getElementById('speed').value + document.getElementById('timeSpeed').value;

    anima.style.animationDelay = document.getElementById('delay').value + document.getElementById('delaySpeed').value;

    if (!InfinityDelay.checked) {
        anima.style.animationIterationCount = document.getElementById('count').value;
    }else{
        anima.style.animationIterationCount = 'infinite';
    }

    anima.style.animationDirection = document.getElementById('direction').value;

    // FIXME: не работает функция бейзера (не записывается в style)
    anima.style.animationTimingFunction = document.getElementById('productFunction').value;

    if (document.getElementById('type-object').value != 'bg'){
        reload();
    }
}

// Перезапуск анимации
function reload() {
    anima = document.querySelector(`#object_animation`);
    if (document.getElementById('type-object').value == 'bg') {
        let objectStyle = document.querySelector('.block-object').getAttribute('style');
        document.querySelector('.block-object').remove();
        document.querySelector('main').insertAdjacentHTML("beforeend", '<div class="block-object"></div>');
        document.querySelector('.block-object').classList.add('object_animation');
        document.querySelector('.block-object').classList.add('fon__bg')
        document.querySelector('.block-object').setAttribute('id', 'object_animation');
        document.querySelector('.block-object').setAttribute('style', objectStyle);
    }else{
        document.querySelector('.block-object').classList.remove('object_animation');
        document.querySelector('.block-object').classList.remove('fon__bg')
        document.querySelector('.block-object').removeAttribute('id');
        let object = document.querySelector('.block-object').innerHTML;
        anima = document.querySelector(`#object_animation`);
        anima.remove();
        document.querySelector('.block-object').insertAdjacentHTML("beforeend", object);
        anima = document.querySelector(`#object_animation`);
    }
}

// Слушатели изменений
input.addEventListener("keyup", createAnim);

input.addEventListener("click", createAnim);

RELOAD.addEventListener('click', reload);

// Выбор анимации
let subtypes = document.getElementById('subtypes');

subtypes.addEventListener('click', function(e){
    document.querySelector('#object_animation').style.animationName = e.target.id;
    document.querySelector('#subtypes .row-nav__paragraph_active').classList.remove('row-nav__paragraph_active');
    document.getElementById(e.target.id).classList.add('row-nav__paragraph_active');
})