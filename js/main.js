var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elList = document.querySelector('.js-list');
var elSelect = document.querySelector('.js-select');
var elSelect2 = document.querySelector('.js-select_2');
elList.style.display = 'flex';
elList.style.margin = '0';
elList.style.padding = '0';



function render(array) {
    elList.innerHTML = '';
    for (var film of array) {
        var elItem = document.createElement('li');
        var filmPoster = document.createElement('img');
        filmPoster.setAttribute('src', film.poster);
        filmPoster.style.width = '100%'
        elItem.appendChild(filmPoster);

        var filmTitle = document.createElement('h3');
        filmTitle.textContent = film.title;
        elItem.appendChild(filmTitle);

        var filmDesc = document.createElement('p');
        filmDesc.textContent = film.overview;
        elItem.appendChild(filmDesc);

        elList.appendChild(elItem);

        elItem.classList.add('p-2', 'shadow-lg')

        elItem.style.width = '300px'
        elItem.style.borderRadius = '10px'
        elItem.style.overflow = 'hiden'
        elItem.style.background = '#202124';
        elItem.style.color = '#fff';
    }
}

render(films);

// Select==========================================
let newSet = new Set();
films.forEach((item) => {
    item.genres.forEach((type) => {
        newSet.add(type)
    })
})

newSet.forEach((gen) => {
    let elOption = document.createElement('option');
    elOption.value = gen;
    elOption.textContent = gen;
    elSelect.appendChild(elOption);
});


let newArr = [];
elSelect.addEventListener('change', () => {
    newArr = [];

    if (elSelect.value != 'All') {
        films.forEach((el) => {
            if (el.genres.includes(elSelect.value)) {
                newArr.push(el)
                render(newArr)
            };
        });
    } else {
        render(films);
    }
});

// ==============================================

// Input==========================================

let searchArr = []

elForm.addEventListener('input', () => {
    let elInputValue = elInput.value.toLocaleLowerCase();
    films.forEach((x) => {
        if (x.title.toLocaleLowerCase().includes(elInputValue)) {
            searchArr.push(x);
        };
    })
    render(searchArr);
    searchArr = [];
})
// ====================================================

// Sort=================================================

elSelect2.addEventListener('change', () => {

    if (elSelect2.value != '0'){
        if (elSelect2.value == 'a-z') {
            let aToz = films.sort((a, b) => {
                return a.title.toLowerCase().charCodeAt(0) - b.title.toLowerCase().charCodeAt(0);
            })
            render(aToz);
        };
        if (elSelect2.value == 'z-a') {
            let zToa = films.sort((a, b) => {
                return b.title.toLowerCase().charCodeAt(0) - a.title.toLowerCase().charCodeAt(0);
            })
            render(zToa);
        }
    }else {
        render(films);
    }
    
})
