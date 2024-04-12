//Exercise 1 is very basic and easy

//console.log(countries);
console.log(webTechs);

//First remove all the punctuations and change the
//string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const words = text.split(" ");
console.log(words);

console.log(words.length);

//function with unlimited argument
const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};
console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
//Arrow function uses arrow instead of the keyword function to declare a function

const square = (n) => {
  return n * n;
};
console.log(square(2)); // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
//const square = (n) => n * n; // -> 4

const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

//Callback
//A callback is a function which can be passed
// as parameter to other function. See the example below.

// a callback function, the function could be any name
const callback = (n) => {
  return n ** 2;
};
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));
