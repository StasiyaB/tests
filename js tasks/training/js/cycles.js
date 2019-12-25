'use strict';
/*for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= 5; j++) {
		document.write(i); //выводит '111', потом '222', потом '333' и так далее
	}
}
*/
/*var str = ''; //начальное значение - пустые кавычки
for (var i = 0; i < 10; i++) {
	str = str + 'x';
}
alert(str); //выведет 'xxxxxxxxxx'
*/
/*var str = '';
for (var i = 0; i < 5; i++) {
	str = str + 'x';
	document.write(str + '<br>');
}
*/
/*var str = '';
for (var i = 1; i <= 9; i++) {
	str = str + i;
}

alert(str); //выведет '123456789'
*/
/*for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= 3; j++) {
		document.write(i);
	}
	document.write('<br>'); //выводим <br>, чтобы было в столбик
}
*/
/*for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= i; j++) {
		document.write(i);
	}
	document.write('<br>');
}

for (var i = 1; i <= 9; i++) {
	var str = ''; //каждый раз зачищаем строку

	for (var j = 1; j <= i; j++) {
		str = str + i;
	}
	document.write(str + '<br>');
}
*/
/*var num = 500;
while (num > 10) {
	num = num / 2;
}
alert(num); //после цикла получим результат
*/
/*for (var num = 500; num > 10; num = num / 2);
alert(num);
*/
/* *************** Пирамидки *************** */
/*1. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.*/
/*var str = '';
for (var i = 1; i <= 9; i ++) {
	str = str + i;
}
alert(str);
document.write(str);
*/
/*2. С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.*/
/*var str = '';
for (var i = 1; i <= 9; i ++) {
	str = str + i;
}
var newStr = str.split('').reverse().join('');
document.write(newStr);
*/
/*3. С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.*/
/*var str = '';
for (var i = 1; i <= 9; i ++) {
	str = str + i;
}
var newStr = str.split('').join('-');
document.write('-'+newStr+'-');
*/
/*4. Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
/*var str = '';
for (var i = 0; i <= 20; i ++) {
	str = str + 'x';
	document.write(str + '<br>');
}
*/
/*5. С помощью двух вложенных циклов нарисуйте следующую пирамидку:
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/
/*for (var i = 0; i <= 9; i ++) {
	for (var j = 1; j <= i; j++) {
		document.write(i);
	}
	document.write('<br>');
}
*/
/*6. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx
*/
var str = '';
for (var i = 0; i < 5; i ++) {
	str = str + 'xx';
	document.write(str+'<br>');
}
