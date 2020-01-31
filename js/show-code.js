// TODO: чтобы код обновлялся сразу при изменении его в настройках
function createCode() {
    let style = document.querySelector('#object_animation').getAttribute('style');
    document.querySelector('.code-block__scss').innerHTML = '';
    let i = 0;
    let selector = '';
    document.querySelector('.code-block__scss').insertAdjacentHTML('beforeend', `<p>.object{</p>`);
    while (style[i]) {
        if (style[i] == ';') {
            selector += style[i];
            document.querySelector('.code-block__scss').insertAdjacentHTML('beforeend', `<p>&emsp;${selector}</p>`);
            selector = '';
            i++;
        }
        selector += style[i];
        i++;
    }
    document.querySelector('.code-block__scss').insertAdjacentHTML('beforeend', `<p>}</p>`);
}

// AJAX
const xmlhttp1 = new XMLHttpRequest();
xmlhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let str;
        var myObj = JSON.parse(this.responseText);
        str = myObj.animations[document.querySelector('#object_animation').style.animationName];
        document.querySelector('.code-block__scss').insertAdjacentHTML("beforeend", str);
    }
};


let flag_block_code = false;
document.querySelector('#code').addEventListener('click', function(){
    if (flag_block_code) {
        document.querySelector('.code-block').classList.remove('show-code');
        flag_block_code = !flag_block_code;
    }else{
        document.querySelector('.code-block').classList.add('show-code');
        flag_block_code = !flag_block_code;
    }

    createCode();
    
    xmlhttp1.open("GET", "js/animations.json", true);
    xmlhttp1.send();
})