'use strict';
/*1. Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src. */
/*var elems = document.getElementsByTagName('img');
for (var i = 0; i < elems.length; i ++) {
  elems[i].onclick = func;
}
function func() {
  alert(this.getAttribute('src'));
}
*/
/*2. Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст. */
var links = document.getElementsByTagName('a');
/*for (var i = 0; i < links.length; i ++) {
  links[i].addEventListener('mouseover', func);
}
function func() {
  this.title = this.innerHTML;
}
*/
/*3. Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.*/
for (var i = 0; i < links.length; i ++) {
  links[i].addEventListener('mouseover', func);
}
/*function func() {
  this.innerHTML = this.innerHTML + ' (' + this.getAttribute('href') + ')';
}*/
/*4. Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста.*/
function func() {
  this.innerHTML = this.innerHTML + ' (' + this.getAttribute('href') + ')';
  this.removeEventListener('mouseover', func);
}
/*5. Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test".*/
var elems = document.getElementsByTagName('input');
/*for (var elem of elems) {
  elem.addEventListener('blur', func);
}
function func() {
  var text = document.getElementById('test');
  test.innerHTML = this.value;
}
*/
/*6. Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции. */
for (var elem of elems) {
  elem.addEventListener('click', func);
}
function func() {
  alert(this.value);
  this.removeEventListener('click', func);
}
/*7. Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит. */
var numbers = document.getElementsByTagName('p');
for (var number of numbers) {
  number.addEventListener('click', func);
}
function func() {
  this.innerHTML = Math.pow(parseInt(this.innerHTML), 2);
}
/*8. Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.*/
var infos = document.getElementsByTagName('input');
for (var info of infos) {
  info.addEventListener('blur', correctData);
}
function correctData() {
  var correctLength = this.dataset.length;
  var inputDataLength = this.value.length;
  if (correctLength == inputDataLength) {
    this.style.borderColor = 'green';
  } else {
    this.styleBorderColor = 'red';
  }
}
console.log(correctData());
/*9. Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener.*/
