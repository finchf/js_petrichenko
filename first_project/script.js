const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i  = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('на сколько оцените этот фильм?', '');

    if (a != null && b != null && a != '' & b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b
    } else {
        console.log('error')
        i--
    }

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count>= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман')
    }


}


console.log(personalMovieDB)