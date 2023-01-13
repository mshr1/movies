//
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?").trim();

  while (
    numberOfFilms == "" ||
    numberOfFilms == null ||
    isNaN(numberOfFilms) // проверка на число true если НЕ число
  ) {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?");
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  // for
  for (i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?").trim();
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
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    // если не false то показываем
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat); // аргументом является false

function writeYourGenres() {
  for (i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
    personalMovieDB.genres.push(genre);
    // personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
  }
}
writeYourGenres();
