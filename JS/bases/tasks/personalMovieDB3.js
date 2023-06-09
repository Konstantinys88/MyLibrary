/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно*/
// Код возьмите из предыдущего домашнего задания

'use strict';

let numberOfFilms;

function start() {
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

let viewidMovie;
let valuation;
let lovesGenres;

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        viewidMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
        valuation = prompt('На сколько оцените его?','');
        if(viewidMovie != null && valuation != null && viewidMovie != "" && valuation != '' && viewidMovie.length < 51) {
            personalMovieDB.movies[viewidMovie] = valuation;
            console.log('done');
        } else {
            i--;
            console.log('снова');
        }   
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
       alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat === false) {
        return console.log(personalMovieDB);
    }
    else {
        return console.log("База данных скрыта");
    }
}

showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        lovesGenres = prompt(`Ваш любимый жанр под номером ${i}`,'');
        personalMovieDB.genres[i - 1] = lovesGenres;
    }
}

writeYourGenres();


// console.log(personalMovieDB);