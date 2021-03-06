'use strict';
/*var i = 1;
while (i <= 50) {
	document.write(i + '<br>');
	i++;
}
*/
/*for (var i = 1; i <= 50; i++) {
	document.write(i + '<br>');
}
*/
/* *********************************** */

/*var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	document.write(arr[i] + '<br>');
}
*/
/* ********************************** */

/*var result = 1;
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
	result = result * arr[i]; // result *= arr[i];
}
alert(result);
*/
/* ************************************* */

/*var obj = {
	'Минск': 'Беларусь',
	'Москва': 'Россия',
	'Киев': 'Украина'
};

for (var key in obj) {
	//alert(key + ' - это ' + obj[key] + '.');
  document.write(key + ' - это ' + obj[key] + '.'  + '<br>');
}
*/
 /* **************************************** */
/* Циклы while и for */
 /*Решите эти задачи сначала через цикл while, а затем через цикл for.*/
/* 1. Выведите столбец чисел от 1 до 100. */
/*var i = 1;
while (i <= 100) {
  document.write(i + '<br>');
  i++;
}
*/
/*for (var i = 1; i <= 100; i++) {
  document.write(i + '<br>');
}
*/
/*2.  Выведите столбец чисел от 11 до 33.*/
/*var i = 11;
while (i <= 33) {
  document.write(i + '<br>');
  i++;
}
*/
/*for (var i = 11; i <= 33; i ++) {
  document.write(i + '<br>');
}
*/
/*3.  Выведите столбец четных чисел в промежутке от 0 до 100.*/
/*var i = 0;
while (i <= 100) {

  document.write(i + '<br>');
  i += 2; //i = i + 2;
}
*/
/*for (var i = 0; i <= 100; i += 2) {
  document.write(i + '<br>');
}
*/
/*4.  С помощью цикла найдите сумму чисел от 1 до 100.*/
/*var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i; // sum = sum + i;
}
console.log(sum);
document.write(sum);
*/
/* ****************************************** */
/* Работа с for для массивов */
/*5. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.*/
/*var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  document.write(arr[i] +'<br>');
}*/
/*6. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.*/
/*var arr = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < arr.length; i ++) {
  sum += arr[i];
}
document.write(sum);
*/
/* *************************************** */
/* Работа с for-in */
/*7. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.*/
/*var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
for (var key in obj) {
  document.write(key +' - is '+ ' " ' +obj[key]+ ' " ' + '  in russian.'+'<br>');
}*/
/*8. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.*/
/*var obj = {Nick: '200', Mike: '300', Pete: '400'};
for (var key in obj) {
  document.write(key +' - has the salary '+ obj[key]+ '  dollars.'+'<br>');
}
*/
 /* ***************************************** */
  /*              Задачи           */
/*9. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.*/
/*var arr =[2, 5, 9, 15, 0, 4];
for (var i = 0; i < arr.length; i ++) {
  if (arr[i] > 3 && arr[i] < 10) {
    document.write(arr[i] + '<br>');
  }
}
*/
/*10. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.*/
/*var arr = [1, 15, 2, -3, 5, -12, -2];
var sum = 0;
for (var i = 0; i < arr.length; i ++) {
  if (arr[i] > 0) {
    sum += arr[i];
  }
}
document.write(sum);
*/
/*11. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.*/
/*var arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (var i = 0; i < arr.length; i ++) {
  if (arr[i] === 4) {
    document.write('It is !');
    break;
  }
}
*/
/*12. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.*/
/*var arr = ['10', '20', '30', '50', '235', '3000'];
for (var i = 0; i < arr.length; i ++) {
  if (arr[i][0] === '1' || arr[i][0] === '2' || arr[i][0] === '5') {
    document.write(arr[i] + '<br>');
  }
}
*/
/*************13. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.*/
/*var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var str = 0;
for (var i = 0; i < arr.length; i ++) {
  document.write(str = -arr[i]);
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write('-'+arr.join('-')+'-');
***************/
/*14. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.*/
/*var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (var day in week) {

  if (week[day] == 'Saturday' || week[day] == 'Sunday') {
     document.write('<strong>'+week[day]+' ');

  } else {
    document.write(week[day]+', ');
  }
}
*/
/*15. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.*/
/*var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var day = 'Tuesday';

for (var key in week) {
  if (week[key] == day) {
    document.write('<i>'+ week[key] + '</i>'+ ' ');
  } else {
    document.write(week[key] + ' ')
  }
}*/
/*16. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.*/
/*var n = 1000;
var num = 0;

while (n > 50) {
  num ++;
  n  = n / 2; // n /= 2;
}
document.write(num + '<br>');
document.write(n);
*/
/*
for(var n = 1000, num = 0; n > 50; n/=2, num++);
alert(n);
alert(num);
*/
