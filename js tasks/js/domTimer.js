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
slider(['text 1', 'text 2', 'text 3'], '#elem', '#prev', '#next');

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
