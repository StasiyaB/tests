'use strict';
/* *********** Отработка циклов ************** */
/*1. Выведите с помощью цикла столбец чисел от 1 до 100.*/
/*for (var i = 1; i <= 100; i ++) {
  document.write(i + '<br>');
}
*/
/*2. Выведите с помощью цикла столбец чисел от 100 до 1.*/
/*for (var i = 100; i >= 1; i --) {
  document.write(i + '<br>');
}
*/
/*3. Выведите с помощью цикла столбец четных чисел от 1 до 100.*/
/*for (var i = 1; i <= 100; i ++) {
  if (i % 2 == 0) {
    document.write(i + '<br>');
  }
}
// or
for (var i = 2; i < 100; i += 2) {
	document.write(i + '<br>');
}
*/
/*4. Заполните массив 10-ю иксами с помощью цикла.*/
/*var arr = [];
for (var i = 0; i < 10; i ++) {
  arr[i] = 'x';
}
document.write(arr);
*/
/*5. Заполните массив числами от 1 до 10 с помощью цикла.*/
/*var arr = [];
for (var i = 1; i <= 10; i ++) {
  arr.push(i);
}
document.write(arr);
// or
var arr = [];
for (var i = 0; i < 10; i ++) {
  arr[i] = i+1 ;
}
document.write(arr);
*/
/*6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.*/
/*var arr = [];
for (var i = 0; i < 10; i ++) {
  arr.push(Math.random().toFixed(2));
}
console.log(arr);
*/
/*7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.*/
/*var arr = [];
for (var i = 1; i <= 10; i ++) {
  arr.push(getRandomInt(1, 10));
}
console.log(arr);
function getRandomInt(min, max){
  return Math.floor(Math.random()*(max - min + 1)) + min;
}*/
// or
/*var arr = [];
for (var i = 0; i < 10; i++) {
	arr.push(Math.round(Math.random() * 10) + 1);
}
console.log(arr);
*/
/*8. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.*/
/*var arr = [-2, 33, 8, 9, 12, -60, 2, 99];
for (var i = 0; i < arr.length; i ++){
  if (arr[i] > 0 && arr[i] < 10) {
    console.log(arr[i]);
  }
}
*/
/*9. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.*/
/*var arr = [-2, 33, 8, 5, 9, 12, -60, 2, 99, 5];
for (var i = 0; i < arr.length; i ++) {
  if (arr[i] === 5) {
    alert('Present');
    break;
  }
}
*/
/*10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.*/
/*var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < arr.length; i ++) {
  sum += arr[i];
}
document.write(sum);
*/
/*11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.*/
/*var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < arr.length; i ++) {
  sum += arr[i] * arr[i]; //sum += Math.pow(arr[i], 2);
}
document.write(sum);
*/
/*12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).*/
var arr = [5, 4, 3, 5, 5];
var sum = 0;
for (var i = 0; i < arr.length; i ++) {
  sum += arr[i];
}
var average = sum / arr.length;
document.write(average);
