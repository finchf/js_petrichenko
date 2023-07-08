// const arr = [1, 2, 3]
// arr[100] = 10
// const obj = {
//     'Anna': 1000,
//     'Alice': 2000,
//     'Katty': 3000,
//     abc: {
//         def: {
//             acd: 2
//         }
//     }
// }
// obj['Bob'] = 4000
//
// const b= 'b'
// arr[50] = b
// obj[b] = b
// console.log(arr)
// console.log(obj)

// const result =confirm('Are you here?')
// console.log(result)

// const answer = +prompt('Вам есть 18?', '')
// console.log( answer +5)
// const answers = [];
// answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('как ваше фамилия?', '');
// answers[2] = prompt('лет?', '');
// console.log(typeof )


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