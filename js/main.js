//
let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// for

for (i = 0; i < 2; i++) {
  let a = prompt("Один из последних просмотренных фильмов?");
  let b = prompt("На сколько оцените его?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--; // Повторяет цикл пока if не будет верным
  }
}

// while

// i = 0;
// while (i < 2) {
//   let a = prompt("Один из последних просмотренных фильмов?");
//   let b = prompt("На сколько оцените его?");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--; // Повторяет цикл пока if не будет верным
//   }
//   i++; // Счетчик цикла while // Итерация вперед
// }

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
