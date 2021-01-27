'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

 };

   
for (let i = 0; i < 2; i++) {
    const   a = prompt('Один из последних просмотренных фильмов?'), 
            b = prompt('Ваша ему оценка?');    

        personalMovieDB.movies[a] = b;

        }

    console.log(personalMovieDB); 

