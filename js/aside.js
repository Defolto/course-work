const Beziers = document.getElementById('Beziers');
const InfinityDelay = document.getElementById('infinity');
const blockFunction = document.querySelector('.options__function')

// выбор задания функции
function changeBeziers() {
    if (Beziers.checked) {
        blockFunction.innerHTML = '';
        blockFunction.insertAdjacentHTML("beforeend", '<input type="text" placeholder="0, 0, .68, .33" id="productFunction1">')
    }else{
        blockFunction.innerHTML = '';
        blockFunction.insertAdjacentHTML("beforeend", '<select id="productFunction" aria-placeholder="ease-in-out"><option value="linear">linear</option><option value="ease">ease</option><option value="ease-in">ease-in</option><option value="ease-out">ease-out</option><option value="ease-in-out">ease-in-out</option></select>')
    }
};

Beziers.addEventListener('click', changeBeziers);

// кол-во шагов
InfinityDelay.onchange = function() {
    if (InfinityDelay.checked) {
        document.getElementById('delay')
        .setAttribute('readonly', 'readonly');
        document.getElementById('delay')
        .setAttribute('value', '');
    }else{
        document.getElementById('delay')
        .removeAttribute('readonly');
    }
};