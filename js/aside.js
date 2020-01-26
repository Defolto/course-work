// выбор задания функции
const Beziers = document.getElementById('Beziers');
const InfinityDelay = document.getElementById('infinity');
const blockFunction = document.querySelector('.options__function')

Beziers.onchange = function() {
    if (Beziers.checked) {
        blockFunction.innerHTML = '';
        blockFunction.insertAdjacentHTML("beforeend", '<input type="text" placeholder="0, 0, .68, .33">')
    }else{
        blockFunction.innerHTML = '';
        blockFunction.insertAdjacentHTML("beforeend", '<select><option>1</option><option>2</option><option>2</option><option>3</option><option>4</option><option>5</option></select>')
    }
};

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