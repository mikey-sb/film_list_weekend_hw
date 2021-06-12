document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript loaded');
    document.querySelector('#new-film-form').addEventListener('submit', handleButton);
    document.querySelector('#delete-all').addEventListener('click', handleDeleteAllClick);
    
})

const handleDeleteAllClick = function(event){
    const filmList = document.querySelector('#film-list');
    filmList.innerHTML = '';
}


const handleButton = function(event){
    event.preventDefault();
    console.log('touchy butty')
    const filmListItem = createFilmListItem(event.target);
    const filmList = document.querySelector('#film-list');
    
    filmList.appendChild(filmListItem);

    event.target.reset();
}

const createFilmListItem = function (form) {
const filmListItem = document.createElement('ul');
const rating_val = form.rating.value
    if(rating_val == 1){
filmListItem.classList.add('one-star');}
    if(rating_val == 2){
filmListItem.classList.add('two-star');}
    if(rating_val == 3){
filmListItem.classList.add('three-star');}
    if(rating_val == 4){
filmListItem.classList.add('four-star');}
    if(rating_val == 5){
filmListItem.classList.add('five-star');}

const title = document.createElement('li');
title.textContent = form.title.value;
filmListItem.appendChild(title);
title.classList.add('li-title')

const description = document.createElement('li');
description.textContent = form.description.value;
filmListItem.appendChild(description);
description.classList.add('li-description')

const genre = document.createElement('li');
const genre_val = form.genre.value
genre.textContent = form.genre.value;
filmListItem.appendChild(genre);
    if(genre_val == 'comedy'){
        filmListItem.classList.add('comedy')
    }
    if(genre_val == 'action'){
        filmListItem.classList.add('action')
    }
    if(genre_val == 'drama'){
        filmListItem.classList.add('drama')
    }
    if(genre_val == 'horror'){
        filmListItem.classList.add('horror')
    }
    if(genre_val == 'romance'){
        filmListItem.classList.add('romance')
    }
    if(genre_val == 'documentary'){
        filmListItem.classList.add('documentary')
    }

const year = document.createElement('li');
year.textContent = form.year.value;
filmListItem.appendChild(year);
year.classList.add('li-year')

const rating = document.createElement('li');
rating.textContent = form.rating.value;
filmListItem.appendChild(rating);




if(rating_val === 1){
    console.log('HERE')
formWrapper.classList.add('one-star')
}
if(rating_val === 2){
formWrapper.classList.add('two-star')
}
if(rating_val === 3){
formWrapper.classList.add('three-star')
}
if(rating_val === 4){
formWrapper.classList.add('four-star')
}
if(rating_val === 5){
formWrapper.classList.add('five-star')
}





return filmListItem
}

const loadFile = function(event) {
const image = document.getElementById('output');
image.src = URL.createObjectURL(event.target.files[0]);
};

