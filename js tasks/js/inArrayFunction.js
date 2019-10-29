'use strict';
function getDivisors(num) {
	var result = [];

	for (var i = 1; i <= num; i++) {
		if(num % i == 0) {
			result.push(i);
		}
	}

	return result;
}

//alert(getDivisors(24)); //выведет [1, 2, 3, 4, 6, 12, 24]
/* ***************** TASKS ***************** */
/*1. Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.*/
function ucFirst(str) {

		var newStr = str[0].toUpperCase()+str.substr(1, str.length);
		return newStr;
}
//document.write(ucFirst('i love java script'));

/*2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.*/
var str = 'var_text_hello';
var arr = str.split('_');

for (var i = 1; i < arr.length; i ++) {
	arr[i] = arr[i][0].toUpperCase()+arr[i].substr(1, str.length);
}
var newStr = arr.join('');
//document.write(newStr);

/*3. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.*/
function inArray(text, arr) {
	/*for (var i = 0; i < arr.length; i ++) {
		if (arr[i] == text) {
			return true;
		}
	}
	return false;*/
	if (arr.indexOf(text) >= 0) {
		return true;
	}
	return false;
}

var arr = ['Сделайте функцию inArray', 'которая определяет, есть в массиве элемент с заданным текстом', 'ункция должна возвращать true или false'];
//console.log(inArray('Сделайте функцию inArray', arr));
//console.log(inArray('inArray', arr));

/*4. Дана строка, например, '123456'. Сделайте из нее '214365'.*/
var str = '123456';
var arr = str.split('');
var newArr = [];
for (var i = 0; i < arr.length; i +=2) {
	var temp = arr.slice(i, i + 2).reverse();
	var newArr = newArr.concat(temp);
}
var newStr = newArr.join('');
console.log(newStr);
/*var str = '0618244767';
var arr = str.split('');
var newArr = [];
for (var i = 0; i < arr.length; i += 2) {
      var couple = arr[i]+arr[i+1];
      newArr = newArr.concat(couple);
}
var newStr = newArr.join('.');
console.log(newStr);
document.write(newStr);
*/
function splitCouples(str) {
  var arr = str.split('');
  var newArr = [];
  for (var i = 0; i < arr.length; i += 2) {
        var couple = arr[i]+arr[i+1];
        newArr = newArr.concat(couple);
  }
  var newStr = newArr.join('.');
  return newStr;
}
document.write(splitCouples('0618244767'));
