const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const prompt1 = prompt("Один из последних просмотренных фильмов?");
const prompt2 = prompt("На сколько оцените его?");
const prompt3 = prompt("Один из последних просмотренных фильмов?");
const prompt4 = prompt("На сколько оцените его?");

personalMovieDB.movies[prompt1] = prompt2;
personalMovieDB.movies[prompt3] = prompt4;

console.log(personalMovieDB);
