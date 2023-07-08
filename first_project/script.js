const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('на сколько оцените этот фильм?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('на сколько оцените этот фильм?', '')

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

console.log(personalMovieDB)