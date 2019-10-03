'use strict';
/*var arr = ['1', '2', '3', '4', '5', '6'];
var result = [];

while (arr.length > 0) { //массив уменьшается в цикле пока не достигнет нуля
	var first = arr.shift();
	var last = arr.pop();
	var str = first+last; //тут будет строка '16', потом '25', потом '34'
	result.push(str);
}

//После цикла в result лежит массив ['16', '25', '34']. Сольем его в строку:
result = result.join('-');
document.write(result);
*/

/*var arr = [43,-3, 10, 100];
console.log(arr.sort());

function sortArr(a,b){
	if(a > b)
		return -1; //или указать число меньше 0
	if(a < b)
		return 1; //или указать цифру больше 0
	if(a==b)
		return 0 ;
}
console.log(arr.sort(sortArr));
*/
/* ************** Method sort() ************* */
/*var arr = [7, 3, 13, 5, 134, 8, 1];
arr.sort(function(a, b) {
	//console.log(a+' '+b);
	//return a - b;
	return b - a;
});
console.log(arr);
*/
/*var arr = [
	{one: 1, two: 2},
	{one: 7, two: 1},
	{one: 3, two: 3}
];
arr.sort(function (a, b) {
	//return a.one - b.one;
	return a.two - b.two;
});
console.log(arr);
*/
/***************************************************/
/*Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.*/
/*var a = ['a', 'b', 'c'];
var b = [1, 2, 3];
//Вариант 1:
var c = a.concat(b);
alert(c); //получится массив ['a', 'b', 'c', 1, 2, 3]

//Вариант 2:
var c = b.concat(a);
alert(c); //получится массив [1, 2, 3, 'a', 'b', 'c']
*/

/*Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.*/
/*var arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
alert(arr); //получится массив ['a', 'b', 'c', 1, 2, 3]
*/
/* *************** Работа с concat ************ */
/*1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.*/
/*var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var result = arr1.concat(arr2);
document.write(result);
console.log(result);
*/
/* *************** Работа с reverse ********* */
/*2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].*/
/*var arr = [1, 2, 3];
console.log(arr.reverse());
document.write(arr);
*/
/* ************* Работа с push, unshift ********* */
/*3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.*/
/*var arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
*/
/*4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.*/
/*var arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);
*/
/* ************** Работа с shift, pop ********* */
/*5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.*/
/*var arr =  ['js', 'css', 'jq'];
var first = arr.shift();
console.log(first);
*/
/*6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.*/
/*var arr = ['js', 'css', 'jq'];
var last = arr.pop();
console.log(last);
*/
/* **************** Работа с slice ************ */
/*7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].*/
/*var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 3));
*/
/*8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].*/
/*var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3));
*/
/* **************** Работа с splice *********** */
/*9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].*/
/*var arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);
*/
/*10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].*/
/*var arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 3));
*/
/*11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].*/
/*var arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 'a', 'b', 'c');
console.log(arr);
*/
/*12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
/*var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
//arr.splice(8, 0, 'e');
arr.push('e');
console.log(arr);
*/
/* **************** Работа с sort ************* */
/*13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/
/*var arr = [3, 4, 1, 2, 7];
arr.sort(function(a, b) {
	return a - b;
});
console.log(arr);
*/
/* ***************** Работа с Object.keys ******** */
/* 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.*/
var obj = {js:'test', jq: 'hello', css: 'world'};
console.log(Object.keys(obj));
