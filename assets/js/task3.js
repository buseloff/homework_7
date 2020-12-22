"use strict";
/*    Задание 3. Напишите функцию, которая выводит 
самое длинное слово в предложении и его индекс.*/
//Предложение для функции
let userSentence =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit, culpa qui praesentium soluta, harum eos: perferendis eius, blanditiis omnis excepturi deserunt mollitia minima quam eos, odit veritatis laborum facilis velit.";

//Функция, которая выводит самое длинное слово в предложении и его индекс
function LongestWordOfSentence(userSentence) {
  let arrayOfWords = userSentence.split(/[\. ! , : " " \?]+/);
  let length = arrayOfWords[0].length;

  arrayOfWords.forEach((element) => {
    if (element.length > length) {
      length = element.length;
    }
  });
  console.log("Для предложения:");
  console.log(userSentence);
  let modArrayOfWords = arrayOfWords.filter(
    (element) => element.length == length
  );

  modArrayOfWords.forEach((element) => {
    console.log(`Самое длинное слово:${element}`);
    console.log(`Его индекс:${arrayOfWords.indexOf(element)}`);
  });
}
//Вызов функции
LongestWordOfSentence(userSentence);
