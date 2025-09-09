const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
// while (numberOfFilms === 0)
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let prompt1;
  let prompt2;

  while (!prompt1 || !prompt2 || prompt1.length > 50) {
    prompt1 = prompt("Один из последних просмотренных фильмов?");
    prompt2 = prompt("На сколько оцените его?");
  }

  personalMovieDB.movies[prompt1] = prompt2;
}

if (personalMovieDB.count < 10)
  console.log("Просмотрено довольно  мало фильмов");
else if (10 <= personalMovieDB.count <= 30)
  console.log("Вы классический зритель");
else if (personalMovieDB.count > 30) console.log("Вы киноман");
else console.log("Произошла ошибка");

console.log(personalMovieDB);
