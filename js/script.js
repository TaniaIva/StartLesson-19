"use strict";

// lesson number 

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//    a: 50
// };

// obj.a = 10;

// console.log(obj);


// console.log(name);
// var name = 'Ivan';

// {
//    let result = 50;
// }

// console.log(result);

// LESSON 11@

// let number = 4.6;

// console.log(-4/0);

// console.log('string' * 9);

// const persone = 'Alex';

// const bool = false;

// console.log(something);

// let und;
// console.log(und);

// Object

// const obj = {
//    name: "John",
//    age: 25,
//    isMarried: false
// };
// console.log(obj.name);
// console.log(obj["name"]);

// ARRAY-МАСИВ
// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// lesson 16
// const arr = ['a', 'b', 'c'];
// const obj = {a:1, b: 2}; 
// const arrObj = {
//    a: 'a',
//    1: 'b',
//    2: 'c'
// };

// arrObj.b = '123';
// arrObj['b'] = '123';

// const b = 'b';
// arrObj[b] = 123;
// console.log(arrObj['b']);
// console.log(arrObj.b)
// console.log(arrObj[b]);

// LESSON 13
// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам є 18 років?', '18');
// console.log(answer);
// console.log(typeof(answer));

// const answer = prompt('Вам є 18?', '18');
// console.log(answer + 5);

// const answer = +prompt('Вам є 18', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Як Вас звати?', ''); 
// answers[1] = prompt('Як Ваше прізвище?', '');
// answers[2] = prompt('Скільки Вам років?', '');

// document.write(answers);

// Интерполяция
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Привіт, ${user}`);

// LESSON 15

// let incr = 10,
//    descr = 10;

// ++incr;
// --descr;

// console.log(incr);
// console.log(descr);

// console.log(2*4 === 8);

// LESSON 17

const numberOfFilms = +prompt('Скільки фільмів Ви вже подивилися?', '');

const personalMoviesDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Один із останніх фільмів, які Ви дивилися?', ''),
      b = prompt('НА скільки зірочок оцінете його?', ''),
      c = prompt('Один із останніх фільмів, які Ви дивилися?', ''),
      d = prompt('НА скільки зірочок оцінете його?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);