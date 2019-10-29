'use strict';
/* **************** Работа с рекурсией ************ */
/*1. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.*/
var arr = [1, 2, 3, 4, 5, 6];
first(arr);
//last(arr);
function first(arr) {
  document.write(arr.shift() + '<br>');
  if (arr.length != 0) {
    first(arr);
  }
}
function last(arr) {
  document.write(arr.pop() + '<br>');
  if (arr.length != 0) {
    last(arr);
  }
}

/*2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).*/
function reduceNum(num) {
  var sum = getDigitSum(num);
  console.log(sum);
  if (sum >= 10) {
    return reduceNum(sum);
  } else {
    return sum;
  }
}
function getSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i ++) {
    sum += Number(arr[i]);
  }
  return sum;
}
function getDigits(num) {
  return String(num).split('');
}
function getDigitSum(num) {
  return getSum(getDigits(num));
}
console.log(reduceNum(89));
