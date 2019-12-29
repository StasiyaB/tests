'use strict';
/* **** Работа с классами **** */
/*1. Дан элемент #elem. Добавьте ему класс www.*/
/*var elem = document.getElementById('elem');
elem.classList.add('www');*/

/*2. Дан элемент #elem. Удалите у него класс www.*/
//elem.classList.remove('www');

/*3. Дан элемент #elem. Проверьте наличие у него класса www.*/
//var checkClass= elem.classList.contains('www');
//document.write(checkClass);
/*4. Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.*/
/*function toggle() {
  var elem = document.getElementById('elem');
  elem.classList.toggle('show');
}*/
/*5. Дан элемент #elem. Узнайте количество его классов.*/
//var elem = document.getElementById('elem');
//var classLength = elem.classList.length;
//document.write(classLength);
/*6. Дан элемент #elem. Выведите последовательно алертом его классы.*/
/*var classLength = elem.classList;
for (var className of  classLength) {
  alert(className);
}*/
/* **** Работа с CSS **** */
/*7. Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.*/

/*var elem = document.getElementById('elem');
elem.style.cssText = 'color:red; font-size:30px; border: solid 2px red';*/

/* **** Свойство tagName **** */
/*8. Дан элемент #elem. По клику на него выведите название его тега.*/

function showTagName() {
  var elem = document.getElementById('elem');
  alert(elem.tagName);
}
/*9. Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.*/
function showTagName() {
  var elem = document.getElementById('elem');
  alert(elem.tagName.toLowerCase());
}
/*10. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.*/
/*var elems = document.getElementsByClassName('www1');
for (var elem of elems) {
  elem.innerHTML = elem.innerHTML +' '+ elem.tagName.toLowerCase();
}*/

/* **** Вставка элементов через appendChild **** */
/*11. Дан ol. Вставьте ему в конец li с текстом 'пункт'.*/

/*12. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.*/

/* **** Привязывание событий при вставке **** */
/*13. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.*/

/* **** Вставка элементов через insertBefore **** */
/*1.4 Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.*/

/* ** Вставка элементов через insertAdjacentHTML ** */
/*15. Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.*/

/*16. Дан элемент #elem. Вставьте после него span с текстом '!!!'.*/

/*17. Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.*/

/*18. Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.*/

/* **** Потомки **** */
/*19. Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.*/

/*20. Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.*/

/*21. Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.*/

/* **** Соседи **** */
/*22. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.*/

/*23. Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.*/

/*24. Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.*/

/* **** Родители **** */
/*25. Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.*/

/*26. Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.*/

/* **** Удаление и клонирование **** */
/*27. Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.*/

/*28. Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.*/

/*29. Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.*/

/*30. Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.*/

/* **** Клонирование **** */
/*31. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут. */

/* ****** Практика ****** */
/*32. Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.*/

/*33. Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.*/

/*34. Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.*/

/*35. Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.*/
