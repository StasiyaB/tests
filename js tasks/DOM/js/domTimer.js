'use strict';
/*let elem = document.querySelector('#elem');
let buttonStart = document.querySelector('#button-start');
let buttonStop = document.querySelector('#button-stop');

buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', stop);

let id;

function start() {
  id = setInterval(function() {
  elem.innerHTML = Number(elem.innerHTML) + 1;
  }, 1000);
  console.log(id);

  this.disabled = true;
  buttonStop.disabled = false;
}

function stop() {
  clearInterval(id);
  this.disabled = true;
  buttonStart.disabled = false;
}
*/
/*let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', start);

//let id;

function start() {
  window.id = setInterval(function() {
  elem.innerHTML = Number(elem.innerHTML) + 1;
  }, 1000);
  console.log(id);
  this.removeEventListener('click', start);
  this.addEventListener('click', stop);

  this.innerHTML = 'stop';
}

function stop() {
  clearInterval(window.id);

  this.removeEventListener('click', stop);
  this.addEventListener('click', start);

  this.innerHTML = 'start';
}
*/
/*function timer() {
	var elem = document.getElementById('test'); //получаем наш инпут
	elem.value = parseInt(elem.value)+1; //увеличиваем значение атрибута на единицу

	if(elem.value < 10) { //если в инпуте меньше 10-ти - то работаем дальше
		//Функция timer запускает саму себя с задержкой в 1 секунду:
		window.setTimeout(timer, 1000);
	}
}
*/
/* ********** TEXT SLIDER ********* */
/*slider(['text 1', 'text 2', 'text 3'], '#elem', '#prev', '#next');

function slider(texts, elem, prev, next) {
  var elem = document.querySelector(elem);
  var prev = document.querySelector(prev);
  var next = document.querySelector(next);

  var i = 0;
  elem.innerHTML = texts[i];

  next.addEventListener('click', function() {
    i++;
    if (i == texts.length) {
      i = 0;
    }
    elem.innerHTML = texts[i];
  });

  prev.addEventListener('click', function() {
    i--;
    if (i == -1) {
      i = texts.length - 1;
    }
    elem.innerHTML = texts[i];
  });
}
*/
/*var i = 1;
elem.innerHTML = texts[0];
setInterval(function () {
  elem.innerHTML = texts[i];
  i++;

  if (i == texts.length) {
    i = 0;
  }
}, 1000);
*/

/* ********* Задачи для решения ********* */
/*1.  Создайте отсчет от 0 до бесконечности:*/
/*function start() {
  window.setInterval(timer, 1000);
}
function timer() {
  var elem = document.getElementById('count');
  elem.innerHTML = parseInt(elem.innerHTML) + 1;
}
*/
/*2.  Создайте отсчет с кнопкой остановки:*/
/*function start() {
  window.timerId = window.setInterval(timer, 1000);
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  start.disabled = true;
  stop.disabled = false;
}
function timer() {
  var elem = document.getElementById('count');
  elem.innerHTML = parseInt(elem.innerHTML) + 1;
}
function stop() {
  window.clearInterval(window.timerId);
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  start.disabled = false;
  stop.disabled = true;
}
*/
/*3. Создайте тикающие часики:*/
/*
<body onload="go()">
	<div class="timer">
		<p id="clock">
			00:00:00
		</p>
	</div>
</body>
*/
/*function go() {
  window.timerId = window.setInterval(timer, 500);
}

function timer() {
  var now = new Date();

  var clock = document.getElementById('clock');
  clock.innerHTML =  addZero(now.getHours()) +':'+ addZero(now.getMinutes()) +':'+ addZero(now.getSeconds());
}

function addZero(num) {
  if (num <= 9) {
    num = '0' + num;
  }
  return num;
}
*/
/*4. Создайте таймер обратного отсчета:*/
/*function start() {
  window.timerId = window.setInterval(timer, 500);
  var start      = document.getElementById('start');
  start.disabled = true;
}
function stop() {
  window.clearInterval(window.timerId);
}
function timer() {
  var count     = document.getElementById('count');
  var finished = document.getElementById('finished');

  var number = parseInt(count.innerHTML) - 1;
  count.innerHTML = number;

    if (number == 0) {
      stop();
      finished.innerHTML = 'Обратный отсчет завершен.';
    }

}
*/
/*5. Создайте простой слайдер:*/
/*var images = ['01.png', '02.png', '03.png'];
var slider = document.querySelector('#slider');
var img = slider.querySelector('img');
var i = 0;

function go() {
  window.setInterval(function() {
    img.src = 'img/' + images[i];
    i ++;
    if (i == images.length) {
      i = 0;
    }
  }, 1000);
}
*/
/*6. Создайте карусель:*/
/*function start() {
  var startButton = document.getElementById('startButton');
  window.setInterval(timer, 1000);
  startButton.disabled = true;
}
function timer() {
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var tmp = img1.src;
  img1.src = img2.src;
  img2.src = img3.src;
  img3.src = tmp;
}
*/
/*7. Создайте карусель:*/
function start() {
  var startButton = document.getElementById('startButton');
  var stopButton = document.getElementById('stopButton')
  window.timerId = window.setInterval(timer, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}
function stop() {
  window.clearInterval(window.timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
}
function timer() {
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');
  var img5 = document.getElementById('img5');
  var img6 = document.getElementById('img6');
  var img7 = document.getElementById('img7');
  var img8 = document.getElementById('img8');
  var img9 = document.getElementById('img9');
  var tmp = img1.src;
  img1.src = img2.src;
  img2.src = img3.src;
  img3.src = img4.src;
  img4.src = img5.src;
  img5.src = img6.src;
  img6.src = img7.src;
  img7.src = img8.src;
  img8.src = img9.src;
  img9.src = tmp;
}
/*8.Создайте отсчет до полуночи:*/

function addZero(num) {
  if (num <= 9) {
    num = '0' + num;
  }
  return num;
}

function go() {
  window.timerId = window.setInterval(timer, 1000);
}

function timer() {
  var now    = new Date();
  var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

  var hours = document.getElementById('hours');
  var minutes   = document.getElementById('minutes');
  var seconds   = document.getElementById('seconds');

  var dif = Math.ceil((midnight - now) / 1000);

  var hoursLeft = Math.floor(dif / (60*60));
  var minutesLeft = Math.floor((dif - hoursLeft * 60 * 60)/ 60);
  var secondsLeft = Math.floor(dif % 60);

  hours.innerHTML = hoursLeft;
  minutes.innerHTML   = addZero(minutesLeft);
  seconds.innerHTML   = addZero(secondsLeft);
}
