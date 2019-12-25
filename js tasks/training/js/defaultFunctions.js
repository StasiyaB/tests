'use strict';
/* *** Отработка стандартных функций JavaScript *** */
/*1. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.*/
var str = "i love javascript";
//var newStr = str[0].toUpperCase()+str.substr(1, str.length);
//var newStr = str.replace('i', 'I');
str = str.split('');
str[0] = str[0].toUpperCase();
var newStr = str.join('');
console.log(newStr);
/*2. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.*/
var str = '123456';
var newStr = str.split('').reverse().join('');
console.log(newStr);
/*3. Проверьте, что строка начинается на http://. */
/*var str = 'http://www.jjjj.com';
if (str.substr(0, 7) == 'http://') {
  alert('yes');
} else {
  alert ('no');
}
*/
/*4. Проверьте, что строка заканчивается на .html. */
/*var str = 'index.html';
if (str.substr(-5) == '.html') {
  alert('yes');
} else {
  alert('no');
}
*/
