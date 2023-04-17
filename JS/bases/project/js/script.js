/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
// 1

document.addEventListener("DOMContentLoaded", () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promoAvd = document.querySelectorAll(".promo__adv img");
    const genre = document.querySelector(".promo__genre");
    const bg = document.querySelector(".promo__bg");
    const movieList = document.querySelector(".promo__interactive-list");
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        let favorit = checkbox.checked;
        if(newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,21)}...`;
            }
            if (favorit) {
                console.log("Любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        

        event.target.reset();
    });

    const deleteAdv = (arg) => {
       arg.forEach(i => {
            i.remove();
        });
    };
    
    const makeChenges = () => {
        genre.textContent = "Драма";
        bg.style.background = `url('img/bg.jpg')`;
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += ` 
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }


    deleteAdv(promoAvd);
    makeChenges();
    createMovieList(movieDB.movies, movieList);

});








