'use strict';
/*var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
var result = {};

for (var key in obj) {
	result[obj[key]] = key;
}

console.log(result); //выведет {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}
*/
/*var arr = ['a', 'b', 'c', 'a', 'a', 'b'];
var count = {a: 0, b: 0, c: 0};

for (var i = 0; i < arr.length; i++) {
	count[arr[i]]++;
}

console.log(count); //выведет {a: 3, b: 2, c: 1}
*/
/*var arr = ['a', 'b', 'c', 'a', 'a', 'b'];
var count = {};

for (var i = 0; i < arr.length; i++) {
	if (count[arr[i]] === undefined) {
		count[arr[i]] = 1;
	} else {
		count[arr[i]]++;
	}
}

console.log(count); //выведет {a: 3, b: 2, c: 1}
*/
/*var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}
*/
/* ****** Заполнение массивов ****** */
/*1. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.*/
/*var str = '';
var arr = [];
for (var i = 0; i < 5; i ++) {
	str = str + 'x';
	arr.push(str);
}
console.log(arr);
*/
/*2. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.*/
/*var arr = [];
for (var i = 1; i <= 5; i ++) {
	var str = '';
	for (var j = 1; j <= i; j ++) {
		str = str + i;
	}
	arr.push(str);
}
console.log(arr);
*/
/*3. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].*/
/*function arrayFill(value, length) {
	var arr = [];
	for (var i = 0; i < length; i ++) {
		arr.push(value);
	}
	return arr;
}
console.log(arrayFill('x', 5));
*/
/*4. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.*/
/*var arr = [10, 1, 2, 1, 3, 2, 3, 6, 8, 10];
var sum = 0;
for (var i = 0; i < arr.length; i ++) {
	sum = sum + arr[i];
	if (sum > 10) {
		console.log(i+1);
		break;
	}
}
*/
/* ********* Переворот массива ********** */
/*5. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.*/
/*var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var flip = [];
for (var i = arr.length-1; i >= 0; i --) {
	flip.push(arr[i]);
}
console.log(flip);
*/
/* ******* Многомерные массивы ******* */
/*6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.*/
/*var arr = [[1, 2, 3], [4, 5], [6]];
var sum = 0;
for (var i = 0; i < arr.length; i ++) {
	for (var j = 0; j < arr[i].length; j ++) {
		sum = arr[i][j] + sum;
	}
}
console.log(sum);
*/
/*7. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.*/
var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0;
for (var i = 0; i < arr.length; i ++) {
	for (var j = 0; j < arr[i].length; j ++) {
		for (var k = 0; k < arr[i][j].length; k ++) {
			sum += arr[i][j][k];
		}
	}
}
console.log(sum);
