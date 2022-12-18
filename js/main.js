var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elList = document.querySelector('.js-list');
elList.style.display = 'flex';
elList.style.margin = '0';
elList.style.padding = '0';

let newArr = [];

elForm.addEventListener('input', function (evt) {
    evt.preventDefault();
    elList.innerHTML = '';
    var elInputValue = elInput.value.toLocaleLowerCase();
    films.forEach((el) => {
        if (el.title.toLocaleLowerCase().includes(elInputValue)) {
            newArr.push(el)
        };
    });
    render(newArr);
    newArr = [];
});


function render(array) {
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

render(films)

