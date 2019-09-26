'use strict';
/* ******************* Поиск и замена ************** */
/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.*/
/*var str = 'aaa@bbb@ccc';
alert(str.replace('@', '!')); //получим 'aaa!bbb@ccc', при простом варианте использования, эта метод найдет и заменит только первое совпадение
//Чтобы заменить все совпадения, воспользуемся глобальным поиском с помощью регулярного выражения:
var str = 'aaa@bbb@ccc';
alert(str.replace(/@/g, '!')); //получим 'aaa!bbb!ccc'
*/
/* ******* Методы substr, substring, slice ********** */
/*2. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами*/
/*var str = 'aaa bbb ccc';
alert(str.substr(4, 3)); //substr(откуда отрезать, сколько отрезать)
alert(str.substring(4, 7)); //substring(откуда отрезать, докуда отрезать)
alert(str.slice(4, 7)); //slice(откуда отрезать, докуда отрезать)
*/
/* ******* Преобразование формата даты ******* */
/*3.  В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'*/
/*var str = '2025-12-31';
var arr = split('-');
alert(arr);//получим массив ['2025', '12', '31']
var newStr = arr[2] + '/' + arr[1] + '/'+arr[0];
alert(newStr); //получим строку '31/12/2025'
*/
/* ******** Работа с регистром символов ******* */
/*4. Дана строка 'js'. Сделайте из нее строку 'JS'.*/
/*var str = 'js';
document.write(str.toUpperCase());
*/
/*5. Дана строка 'JS'. Сделайте из нее строку 'js'.*/
/*var str = 'JS';
document.write(str.toLowerCase());
*/
/* ******** Работа с length, substr, substring, slice. Работа с indexOf ******** */
/*6. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.*/
/*var str = 'я учу javascript!';
document.write(str.length);
*/
/*7. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).*/
/*var str = 'я учу javascript!';
document.write(str.substr(0, 1)+'<br>');
document.write(str.substring(1, 0)+'<br>');
document.write(str.slice(0, -16));
*/
/* 8. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.*/
/*var str = 'я учу javascript!';
document.write(str.indexOf('учу', 0));
*/
/*9. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.*/
var str = 'Создавайте инкапсулированные компоненты с собственным состоянием, а затем объединяйте их в сложные пользовательские интерфейсы.';
var newStr = str.substr(74);
var n = 73;

if (str.length > n) {
  var result = str.replace(newStr, '...');
} else {
  result = str;
}
document.write(result);

/* ************** Работа с replace ************ */

/*10 Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены. */

/* ************** Работа с split ************* */

/*11. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.*/

/*12. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.*/

/*13.В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.*/

/* ************** Работа с join ************** */

/*14. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.*/

/* ******************* Задачи **************** */
/*15. Преобразуйте первую букву строки в верхний регистр.*/

/*16. Преобразуйте первую букву каждого слова строки в верхний регистр.*/

/*17.Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.*/