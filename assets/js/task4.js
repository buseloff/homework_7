"use strict";
/*Задание 4. Напишите функцию, которая выводит среднюю длину слова в предложении.
 */
//Предложение для функции
let userSentence =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit, culpa qui praesentium soluta, harum eos: perferendis eius, blanditiis omnis excepturi deserunt mollitia minima quam eos, odit veritatis laborum facilis velit.";

//Функция, которая выводит среднюю длину слова в предложении
function AverageLengthOfWordsOfSentence(userSentence) {
  let arrayOfWords = userSentence.split(/[\. ! , : " " \?]+/);
  let sumOfLengthOfWords = 0;
  arrayOfWords.forEach((element) => {
    sumOfLengthOfWords += element.length;
  });

  console.log("Для предложения:");
  console.log(userSentence);
  console.log(
    `Средняя длина слова = ${parseInt(
      sumOfLengthOfWords / arrayOfWords.length
    )} символов`
  );
}
//Вызов функции
AverageLengthOfWordsOfSentence(userSentence);
