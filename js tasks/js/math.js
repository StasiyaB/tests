'use strict';
/*1. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.*/
/*var a = 10;
var b = 3;
var result = a % b;
document.write(result);
*/
/*2. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления. */
/*var a = 10;
var b = 2;
var rest = a % b;
if (rest != 0) {
  document.write('There is a rest: ' + rest);
} else {
  document.write('Division without a rest. The result is: '+(a/b));
}
*/
/******** Работа со степенью и корнем ******/
/*3. Возведите 2 в 10 степень. Результат запишите в переменную st.*/
/*var st = Math.pow(2, 10);
document.write(st);
*/
/*4. Найдите квадратный корень из 245.*/
/*document.write(Math.sqrt(245));
*/
/*5. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/
/*var arr = [4, 2, 5, 19, 13, 0, 10];
var sum = 0;

for (var i = 0; i < arr.length; i ++) {
  sum += Math.pow(arr[i], 3);
}
console.log(Math.sqrt(sum));
*/
/********* Работа с функциями округления ******/
/*6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.*/
/*var sqr = Math.sqrt(379);
var round = Math.round(sqr);
var presTenths = sqr.toFixed(1);
var presHundredths = sqr.toFixed(2);

document.write('Square root of 379 is '+'<i>'+sqr+'</i>'+'<br>Rounded to whole it is '+'<i>'+round+'</i>'+'<br> Rounded to tenths it is  '+'<i>'+presTenths+'</i>'+'<br> Rounded to hundredths it is '+'<i>'+presHundredths+'</i>' );
*/
/*7. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.*/
/*var sqr = Math.sqrt(587);
var obj = {
  'floor': [Math.floor(sqr)],
  'ceil' : [Math.ceil(sqr)]
};*/
/*obj['floor'][0] = Math.floor(sqr);
obj['ceil'][0]  = Math.ceil(sqr);
*/
/*document.write('Square root of 587 is '+'<i>'+sqr+'</i>'+'<br>Rounded to floor it is '+'<i>'+obj['floor'][0]+'</i>'+'<br> Rounded to ceil it is  '+'<i>'+obj['ceil'][0]+'</i>');
*/
/**** Нахождение максимального и минимального числа */
/*8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.*/
/*var min = Math.min(4, -2, 5, 19, -130, 0, 10);
var max = Math.max(4, -2, 5, 19, -130, 0, 10);

document.write('The minimal number of the array [4, -2, 5, 19, -130, 0, 10] is: '+'<i> '+min+'</i>'+'<br>The maximum number of the array [4, -2, 5, 19, -130, 0, 10] is: '+'<i> '+max+'</i>');
*/
/****************** Работа с рандомом *******/
/*9. Выведите на экран случайное целое число от 1 до 100.*/
/*function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.write('A random number between 1 and 100 is: '+'<strong><i>'+getRandomInt(1, 100)+'</strong></i>');
*/
/*10. Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). */
/*var arr = [];
for (var i = 0; i < 10; i++) {

	arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}
document.write('The random array of 10 numbers: ['+'<strong><i>' +arr+'</strong></i>'+']');
*/
/****************** Работа с модулем *********/
/*11. Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.*/
/*var a = prompt('Input a number');
var b = prompt('Input anotjer number');
var result = a - b;
document.write(Math.abs(result));
*/
/*12. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/
var a = /*3; */ 6;
var b = /*5; */ 1;
var c = Math.abs(a - b);
alert(c);
/******************** Задачи *****************/
/*13. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. */

/*14. Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.*/
