'use strict';
//var date = new Date();
/*console.log(
  date.getFullYear() +'.'+
  date.getMonth() +'.'+
  date.getDate() +'  '+
  date.getHours() +':'+
  date.getMinutes() +':'+
  date.getSeconds()
);
*/
/* ************* Сравнение дат **************** */
/*var date1 = '2019-12-01';
var date2 = '2020-12-01';

var date1 = new Date(date1);
var date2 = new Date(date2);
//console.log(date1 > date2);
console.log(date1 - date2);

var date = '2018-12-01';
var ms = Date.parse(date); //date = new Date(date);
console.log(ms); //console.log(date.getTime());
*/
/* ****** Нахождение последнего дня месяца ********** */
/*var month = 0;
var year = 2019;
var date = new Date(year, month + 1, 0);
console.log(
  date.getFullYear() +'.'+
  date.getMonth() +'.'+
  date.getDate() +'  '+
  date.getHours() +':'+
  date.getMinutes() +':'+
  date.getSeconds()
);

console.log(
  date.getDate()
);
*/
/* ****** Определить високосный год ******** */
/*var year = 2100;
var date = new Date(year, 2, 0);
if (date.getDate() == 29) {
  console.log(true);
} else {
  console.log(false);
}
*/
/* ***** проверка корректности даты на JS ****** */
/*function checkDate(year, month, day) {
  let date = new Date(year, month - 1, day);
  return (date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day);
  /*if (date.getFullYear() == year && date.getMonth() == munth - 1 && date.getDate() == day) {
    return true;
  } else {
    return false;
  }
}
*/
//console.log(checkDate(2018, 1, 31));


/*let date = new Date(2018, 0, 32);
console.log(date.getFullYear(), date.getMonth(), date.getDate());
*/
/* ***** countdown ******* */
/*
var text = document.querySelector('#text');

timer();
setInterval(timer, 1000 );
function timer() {
  var now = new Date();
  var target = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  );

  var dif = Math.ceil((target - now) / 1000);

  var hours = Math.floor(dif / (60 * 60));
  var dif = dif % (60 * 60);

  var minutes = Math.floor(dif / 60);
  var dif = dif % 60;

  var seconds = dif;

  text.innerHTML = 'Till midnight left: ' + addZero(hours) +':'+ addZero(minutes) +':'+ addZero(seconds);
}

function addZero (num) {
  if (num <= 9) {
    num = '0' + num;
  }
    return num;
}
*/
/*
var text = document.querySelector('#text');

timer();
setInterval(timer, 1000 );
function timer() {
  var now = new Date();
  var target = new Date(
    now.getFullYear()+1,
    0,
    1,
    0,
    0,
    0
  );

  var dif = Math.ceil((target - now) / 1000);

  var days = extract(dif, 60 * 60 * 24);
  var hours = extract(days.dif, 60 * 60);
  var minutes = extract(hours.dif, 60);
  var seconds = extract(minutes.dif, 1);

  text.innerHTML = 'Till midnight left: ' +'<b>'+ addZero(days.value)+'</b>'+ ' <i>days</i> ' +'<b>'+ addZero(hours.value) +':'+ addZero(minutes.value) +':'+ addZero(seconds.value) +'</b>'+' <i>hours</i>';
}

function extract(dif, formula) {
  var value = Math.floor(dif / formula);
  var dif = dif % formula;

  return {value: value, dif: dif};
}
function addZero(num) {
  if (num <= 9) {
    num = '0' + num;
  }
    return num;
}
*/

/*1. Задача. Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.*/

var date = new Date();
//alert(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());

/*2. Задача. Выведите на экран текущий месяц словом, по-русски.*/

/*var months = [
'янв', 'фев', 'мар', 'апр', 'май', 'июн',
'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

var date = new Date();
var month = date.getMonth();*/
//alert(months[month]);

/* ********** Работа с new Date ************* */
/*3. Для решения задач данного блока вам понадобятся следующие методы объекта Date: getFullYear, getMonth, getDate, getHours, getMinutes, getSeconds.*/
//3.1. Выведите на экран текущий день.
var date = new Date();
//document.write(date.getDate());

//3.2. Выведите на экран текущий месяц.
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = date.getMonth();
//document.write(months[month]);

//3.3. Выведите на экран текущий год.
//document.write(date.getFullYear());

/*4. Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/
function addZero(num) {
  if (num <= 9) {
    num = '0' + num;
  }
  return num;
}
//document.write(addZero(date.getHours()) +':'+ addZero(date.getMinutes()) +':'+ addZero(date.getSeconds()) +' '+ addZero(date.getDate()) +'.'+ addZero(date.getMonth()) +'.'+ addZero(date.getFullYear()));

/* *************** Работа с getDay ************** */
/*5. Выведите на экран номер текущего дня недели. */

/*6. Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски. */
var day = date.getDay();
function showDay(day) {
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekDays[day];
}
//document.write(showDay(day));

/*7. Узнайте, какой был 7-го января 2015 года. */
var date = new Date(2015, 0, 7);
var day = date.getDay();
function showDay(day) {
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekDays[day];
}
//document.write(showDay(day));

/* ************ Работа с getTime *************** */
/*8. Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.*/
var date = new Date();
var min = Math.floor(date.getTime() / (1000 * 60)) ;
//document.write(min);
//console.log(min);
/* ***************** Работа с Date.parse *********** */
/*9. Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse.*/
var date = new Date();
var now = date.getTime();

var than = Date.parse('1988-03-01T00:00:00');

var result = now - than;
result = Math.ceil(result / (1000 * 60 * 60));
//console.log(result);

/* *************** Разность между датами ********* */
/*10. Выведите на экран количество секунд с начала дня до настоящего момента времени.*/
var date = new Date();

var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

var result = Math.floor((date.getTime() - now.getTime()) / 1000);
console.log(result);

/* ***************** Задачи **************** */
/*11. Выведите на экран количество секунд, которое осталось до конца дня. */

/*12. Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' (с конкретным годом). По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения. Воспользуйтесь методом Date.parse. */
