"use strict";
/* Задание 1. Напишите функцию, которая подсчитывает сумму квадратов элементов массива.
 */
//Создание массива заданой длины
let lengthOfUserArray = 10;
let userArray = new Array(lengthOfUserArray);
let i;

//Заполнение массива элементами
for (i = 0; i < userArray.length; i++) {
  userArray[i] = parseInt(Math.random() * 10);
}

//Функция вычисления суммы квадратов
function SumOfSquaresOfElementsOfArray(userArray) {
  let initialValue = 0; 
  const reducerSum = (accumulator, currentValue) =>
    accumulator + currentValue ** 2;
  return userArray.reduce(reducerSum, initialValue);
}

//Вызов функции
console.log(`Для массива = [${userArray}]`);
console.log(
  `Сумма квадратов элементов массива = ${SumOfSquaresOfElementsOfArray(
    userArray
  )}`
);
