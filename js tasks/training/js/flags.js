'use strict';
/*function hasElem(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 'c') {
			return true;
		}
	}

	return false; //элемент 'c' не найден
}
var arr = ['a', 'b', 'c', 'd', 'e'];
alert(hasElem(arr));
*/
/* **************** FLAGS ************* */
/*1. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.*/
/*var arr = [10, 12, 8, 3, 5, 13];
var flag = false;

for (var i = 0; i < arr.length; i ++) {
  if (arr[i] == 5) {
    flag = true;
    break;
  }
}

if (flag === true) {
  document.write('The element 5 is present in the array');
} else {
  document.write('The element 5 is not present in the array');
}
*/
/*2. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.*/
/*
var num = 31;
function division(num) {
  for (var i = 1; i <= 31; i ++) {
    if (num/i === 1 || num/1 === 31) {
      return true;
    }
  }
  return false;
}
alert(division(num));
*/
/*3. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.*/
var arr = [3, 5, 10, 12, 12, 22,14];
var twin = false;

for (var i = 0; i < arr.length; i ++) {
  for (var j = i + 1; j < arr.length; j ++) {
    if (arr[i] === arr[j]) {
      twin = true;
      break;
    }
  }
}

if (twin === true) {
  alert('Yes');
} else {
  alert('No');
}
