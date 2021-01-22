"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

 };

 const   a = prompt('Один из последних просмотренных фильмов?'), 
    b = prompt('Ваша ему оценка?');    
    c = prompt('Один из последних просмотренных фильмов?'), 
    d = prompt('Ваша ему оценка?');    
    personalMovieDB.movirs[a] = b;
    personalMovieDB.movirs[c] = d;

    console.log(personalMovieDB); 