//
let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt(
      "Сколько фильмов Вы уже посмотрели?"
    ).trim();

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count) // проверка на число true если НЕ число
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      // если не false то показываем
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();

      // personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
      if (genre == "" || genre == null) {
        console.log("Вы ввели некорректные данные или не ввели их вообще");
        i--;
      } else {
        personalMovieDB.genres.push(genre);
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      // если true
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

// RememberMyFilms

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
// }
// rememberMyFilms();

// RememberMyFilms
