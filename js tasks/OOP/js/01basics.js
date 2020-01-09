'use strict';

/*1. */
/*class Worker {
  constructor (name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    var salary = this.rate * this.days;
    return salary;
  }
}
var worker1 = new Worker('Ivan', 'Ivanov', 10, 31);
var worker2 = new Worker('Vasily', 'Petrov', 15, 31);

console.log(worker1.name); //выведет 'Иван'
console.log(worker1.surname); //выведет 'Иванов'
console.log(worker1.rate); //выведет 10
console.log(worker1.days); //выведет 31
console.log(worker1.getSalary()); //выведет 310 - то есть 10*31
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());

console.log(worker1.getSalary()+worker2.getSalary());
*/
/*2.*/

class Worker {
  constructor (name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  getName() {
    return this._name;
  }
  getSurname() {
    return this._surname;
  }
  getRate() {
    return this._rate;
  }
  setRate(rate) {
    this._rate = rate;
  }
  getDays() {
    return this._days;
  }
  setDays(days) {
    this._days = days;
  }
  getSalary() {
    var salary = this._rate * this._days;
    return salary;
  }
}
var worker = new Worker('Ivan', 'Ivanov', 10, 31);

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
//Теперь используем сеттер:
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10

/*3. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.*/
class MyString {
  reverse(string) {
    this.string = string;
    var arr = this.string.split('');
    arr = arr.reverse();
    var stringReverse = arr.join('');
    return stringReverse;
  }
  ucFirst(string) {
    this.string = string;
    var ucFirstStr = this.string[0].toUpperCase()+this.string.substr(1, this.string.length);
    return ucFirstStr;
  }
  ucWords(string) {
    this.string = string;
    var arr = this.string.split(' ');
    for (var i = 0; i < arr.length; i ++) {
      arr[i] = arr[i][0].toUpperCase()+arr[i].substr(1, this.string.length);
    }
    var ucWordsStr = arr.join(' ');
    return ucWordsStr;
  }
}

var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

/*4. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:*/

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны
