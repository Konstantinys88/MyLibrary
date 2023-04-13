/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания


// let viewidMovie;
// let valuation;
// let lovesGenres;

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
    start: function() {
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            let viewidMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
            let valuation = prompt('На сколько оцените его?','');
            if(viewidMovie != null && valuation != null && viewidMovie != "" && valuation != '' && viewidMovie.length < 51) {
                personalMovieDB.movies[viewidMovie] = valuation;
                console.log('done');
            } else {
                i--;
                console.log('снова');
            }   
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
           alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: function(DataBase) {
        if(DataBase.privat) {
            DataBase.privat = false;
        } else DataBase.privat = true;
    },
    showMyDB: function(DataBase) {
        if(DataBase.privat === false) {
            return console.log(DataBase);
        }
        else {
            return console.log("База данных скрыта");
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let lovesGenres = prompt(`Ваш любимый жанр под номером ${i}`,'');
            if(lovesGenres != null && lovesGenres !="") {
                personalMovieDB.genres[i - 1] = lovesGenres;
                // console.log(`Любимый жанр ${i} - это ${personalMovieDB.genres[i - 1]}`);
            } else {
                i--;
                console.log(`Вы ввели некорректные данные`);
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB(personalMovieDB);

