"use strict";
/*   Задание 2. Напишите функцию, которая выводит индексы
 нулевых элементов массива, а потом удаляет нули.
 */
//Создание массива заданой длины
let lengthOfUserArray = 15;
let userArray = new Array(lengthOfUserArray);
let i;

//Заполнение массива элементами
for (i = 0; i < userArray.length; i++) {
  userArray[i] = parseInt(Math.random() * 3);
}

//Функция, которая выводит индексы нулевых элементов массива, а потом их удаляет
function IndexesOfZeroElements(userArray) {
  let index = 0;
  console.log("Для массива: ");
  console.log(userArray);
  console.log("Индексы элементов со значением 0:");
  userArray.forEach((element) => {
    if (element == 0) {
      console.log(userArray.indexOf(element, index));
      index = userArray.indexOf(element, index) + 1;
    }
  });

  userArray = userArray.filter((element) => element != 0);
  console.log("Массив с удаленными нулевыми элементами: ");
  console.log(userArray);
}
//Вызов функции
IndexesOfZeroElements(userArray);
