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
    if(genre_val == 'Comedy'){
        filmListItem.classList.add('comedy')
    }
    if(genre_val == 'Action'){
        filmListItem.classList.add('action')
    }
    if(genre_val == 'Drama'){
        filmListItem.classList.add('drama')
    }
    if(genre_val == 'Horror'){
        filmListItem.classList.add('horror')
    }
    if(genre_val == 'Romance'){
        filmListItem.classList.add('romance')
    }
    if(genre_val == 'Documentary'){
        filmListItem.classList.add('documentary')
    }

const year = document.createElement('li');
year.textContent = form.year.value;
filmListItem.appendChild(year);
year.classList.add('li-year')

const rating = document.createElement('li');
filmListItem.appendChild(rating);
const rating_val = form.rating.value
rating.classList.add('li-rating')

    if(rating_val == 1){
        filmListItem.classList.add('one-star');
        const star1 = document.getElementById('one-star-star')
        rating.appendChild(star1)}

    if(rating_val == 2){
        filmListItem.classList.add('two-star');
        const star2 = document.getElementById('two-star-star')
        rating.appendChild(star2)}

    if(rating_val == 3){
        filmListItem.classList.add('three-star');
        const star3 = document.getElementById('three-star-star')
        rating.appendChild(star3)}

    if(rating_val == 4){
        filmListItem.classList.add('four-star');
        const star4 = document.getElementById('four-star-star')
        rating.appendChild(star4)}

    if(rating_val == 5){      
        filmListItem.classList.add('five-star');
        const star5 = document.getElementById('five-star-star')
        rating.appendChild(star5)}

return filmListItem
}



