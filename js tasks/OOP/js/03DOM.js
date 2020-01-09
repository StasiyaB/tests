'use strict';
/*1. Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции. Класс должен работать следующим образом:*/

class Elem {
  constructor(selector) {
    this.elem = document.querySelector(selector);
  }
  html(text) {
    this.elem.innerHTML = text;
    return this;
  }

  attr(name, value) {
    this.elem.setAttribute(name, value);
    return this;
  }
}

var elem = new Elem('#parent');

elem.html('!'); //запишет в текст элемента '!'
//elem.append('!'); //запишет в начало элемента '!'
//elem.prepend('!'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www

//Должны работать цепочки методов:
//elem.html('hello').append('!').prepend('!');
elem.attr('class', 'www').attr('title', 'hello');
/*2. Модифицируйте класс Elem из предыдущей задачи так, чтобы он мог работать не только с одним элементом, но и одновременно с группой, как это сделано в jQuery. Кроме того: реализуйте еще и метод each, который будет работать также, как и each из jQuery.*/

/* ***** Практика ***** */
/*3. Реализуйте класс Rectangle, о котором я рассказываю в видео в теоретической части урока. У него должны быть следующие свойства: ширина width, высота height. Также у него должны быть следующие методы: получить ширину getWidth, установить ширину setWidth, получить высоту getHeight, установить высоту setHeight.*/
