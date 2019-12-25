'use strict';
/* **************** Задачи ************** */
/*1. Задача: пусть дан массив с числами, давайте запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.*/
/*var arr = [12, 19, 28, 13, 14, 345];
var result = [];
var num;

for (var i = 0; i < 10; i++) {
	if (inRange(arr[i])) {
		result.push(arr[i]);
	}
}
console.log(result);

var sum = 0;

for (var i = 0; i < 10; i++) {
	sum += arraySum(getDigits(num));
}
alert(sum);

function inRange(num) {
	var sum = arraySum(getDigits(num));
	return sum >= 1 && sum <= 9;
}

function getDigits(num) {
	return String(num).split('');
}

function arraySum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += Number(arr[i]);
	}

	return sum;
}
*/
/*2. Задача. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.*/

/*var arr = [-1, -2, 5, 2, -3, 7];

function isPositive(num) {
if (num >=0) {
	return true;
} else {
	return false;
}
}

var newArr = [];
for (var i = 0; i <= arr.length; i++) {
if (isPositive(arr[i])) {
	newArr.push(arr[i]);
}
}

console.log(newArr);
*/
/* *************** Задачи для решения ************** */
/*1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.*/
function isNumberInRange(num) {
  if (num > 0 && num < 10) {
    return true;
  } else {
    return false;
  }
}
//alert(isNumberInRange(22));

/*2. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.*/
var arr = [4, 2, 15, 9, 7, -3, 0, 22];
var newArr = [];
for (var i = 0; i < arr.length; i ++){
  if (isNumberInRange(arr[i])) {
    newArr.push(arr[i]);
  }
}
//console.log(newArr);
/*3. Сделайте функцию getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр.*/
function getDigitsSum(num) {
  var sum = 0;
  var str = String(num);
  for (var i = 0; i < str.length; i ++) {
    sum += Number(str[i]);
  }
  return sum;
}
//console.log(getDigitsSum(2019));

/*4. Найдите все года от 1 до 2019, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.*/

for (var i = 1; i <= 2019; i ++) {
  if (getDigitsSum(i) == 13) {
    document.write(i + ' ');
  }
}

/*5. Сделайте функцию isEven(), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.*/
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
//console.log(isEven(2));
/*6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.*/
var arr = [1, 15, 20, 2, 45 , 82, 8, 7];
var newArr = [];
for (var i = 0; i < arr.length; i ++) {
  if (isEven(arr[i])) {
    newArr.push(arr[i]);
  }
}
//console.log(newArr);
/*7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).*/
function getDivisors(num) {
  var arr = [];
  for (var i = 1; i <= num; i ++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(getDivisors(25));
