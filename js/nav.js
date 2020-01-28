const xmlhttp = new XMLHttpRequest();
let nav = document.getElementById('subtypes');
let type;

// Слушатель клика по типам
var element = document.querySelector("#types");
element.addEventListener("click", function(e){
    type = e.target.id;
    xmlhttp.open("GET", "js/navList.json", true);
    xmlhttp.send();
});

// AJAX
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let str;
        var myObj = JSON.parse(this.responseText);
        nav.innerHTML = '';
        for (let i = 0; i < myObj.types[type].length; i++) {
            str = myObj.types[type][i][0].toUpperCase() + myObj.types[type][i].slice(1)
            nav.insertAdjacentHTML("beforeend", `<p class="row-nav__paragraph">${str}</p>`);
        }
    }
};

// высота main от nav
function heightNav() {
    document.querySelector('main').style.height = (document.documentElement.clientHeight - document.querySelector('header').clientHeight) + 'px';
}

heightNav();

