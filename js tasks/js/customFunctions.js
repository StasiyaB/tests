'use strict';
/*1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.*/
/*var num = prompt('Please, input the number ...');
function square(num) {
	return num * num;
};
document.write('The square of number '+'<strong>'+num+'</strong>'+' is equal to: '+'<strong>'+square(num)+'</strong>');
*/
/*2. Сделайте функцию, которая возвращает сумму двух чисел.*/
/*var a = parseInt(prompt('Please, input the number ...'));
var b = parseInt(prompt('Please, input another number ...'));
function sum(a, b){
  return a+b;
};
document.write('The sum of '+'<strong>'+a+'</strong>'+' + '+'<strong>'+b+'</strong>'+' is equal to: '+'<strong>'+sum(a, b)+'</strong>');
*/
/*3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.*/
/*var a = parseInt(prompt('Please, input a number ...'));
var b = parseInt(prompt('Please, input another number ...'));
var c = parseInt(prompt('Please, input a third number ...'));

function action(a, b, c) {
  var result = (a-b)/c;
  return result;
};
document.write('The result of the action '+'<strong>'+a+'</strong>'+' - '+'<strong>'+b+'</strong>'+' / '+'<strong>'+c+'</strong>'+' is equal to: '+'<strong>'+action(a, b, c)+'</strong>');
*/
/*4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.*/
var week = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
var day = parseInt(prompt('Please, input any number from 1 to 7'));
  function dayOfWeek(day) {
    if (day < 1 || day > 7) {
    alert('There is no day of the week with corresponded number!');
    } else {
      return week[day];
    }
};
document.write(dayOfWeek(day));
