<?php
	//$str = 3+false;
  //echo $str;
  /*$var = 'hello';
  var_dump($var[0]);
  var_dump($var[1]);
  var_dump($var[4]);
  */

  /*$sec_hour = 60*60;
  $sec_hour_day = 60*60*24;
*/
/* **************** Работа с переменными ************ */
/* 1. Создайте переменную $a и присвойте ей значение 3. Выведите значение этой переменной на экран.*/
  $a = 3;
  //echo $a;
  //var_dump($a);
/*2. Создайте переменные $a=10 и $b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).*/
  $a=10;
  $b=2;
  $sum = $a + $b;
  $dif = $a - $b;
  $mult = $a * $b;
  $div = $a / $b;

/*3. Создайте переменные $c=15 и $d=2. Просуммируйте их, а результат присвойте переменной $result. Выведите на экран значение переменной $result.*/
  $c = 15;
  $d = 2;
  //$result = $c + $d;
/*4. Создайте переменные $a=10, $b=2 и $c=5. Выведите на экран их сумму.*/
  $a = 10;
  $b = 2;
  $c = 5;
  //$res = $a + $b + $c;
  //echo $a + $b + $c;

/* 5. Создайте переменные $a=17 и $b=10. Отнимите от $a переменную $b и результат присвойте переменной $c. Затем создайте переменную $d, присвойте ей значение 7. Сложите переменные $c и $d, а результат запишите в переменную $result. Выведите на экран значение переменной $result.*/
  $a = 17;
  $b = 10;
  $c = $a - $b;
  $d = 7;
  //$result = $c + $d;

/* *************** Работа со строками ************** */
/* 6. Создайте переменную $text и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.*/
  //$text = 'Привет, Мир!';

/*7. Создайте переменные $text1='Привет, ' и $text2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.*/
  $text1 = 'Привет, ';
  $text2='Мир!';
  //$text = $text1.$text2;

/*8. Создайте переменную $name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'. Вместо %Имя% должно стоять ваше имя.*/
  $name = 'Anastasiya';
  //echo 'Привет, '.$name. '!';
  //$frase = 'Привет, '.$name. '!';

/*9. Создайте переменную $age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.*/
  $age = 39;
  //$frase2 = ' Мне '.$age. '  лет!';

/* *********** Обращение к символам строки *********** */
/*10. Создайте переменную $text и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.*/
  //$text = 'abcde';

/*11. Дана произвольная строка, например, 'abcde'. Поменяйте первую букву (то есть букву 'a') этой строки на '!'.*/
  //$text[0] = '!';
  //echo $text;

/*12. Создайте переменную $num и присвойте ей значение '12345'. Найдите сумму цифр этого числа.*/
  $num = '12345';
  //$result = $num[0]+$num[1]+$num[2]+$num[3]+$num[4];

/* ************** Практика *************** */
/*13. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.*/
  $sec_hour = 60*60;
  $sec_day =   $sec_hour*24;
  $sec_month = $sec_day*30;
/*14. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.*/
  $hour = 22;
  $min = 02;
  $sec = 13;
/*15. Создайте переменную, присвойте ей число. Возведите это число в квадрат (это значит нужно умножить его само на себя). Выведите его на экран. */
  $num = 2;
  //$square = $num*$num;

/* ******* Работа с присваиванием и декрементами ****** */
/*16. Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.*/

  /*$var = 47;
  //$var += $var; //= $var + 7;
  //$var -= $var; //= $var - 18;
  //$var *= $var; //= $var * 10;
  $var /= $var; //= $var / 20;*/
  //echo $var;

/*17. Переделайте этот код так, чтобы в нем использовалась операция .=. Количество строк кода при этом не должно измениться.*/

/*  $text = 'Я';
  $text .= ' хочу'; //= $text.' хочу';
  $text .= ' знать';//= $text.' знать';
  $text .= ' PHP!';//= $text.' PHP!';*/
  //echo $text;

/*18. Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.*/

  /*$var = 10;
  //$var ++; //= $var + 1;
  //++ $var; //= $var + 1;
  $var --; // = $var - 1;*/
  //echo $var;

/*19. Переделайте этот код так, чтобы в нем использовались операции ++, -- , +=, -=, *=, /=. Количество строк кода при этом не должно измениться.*/

  /*$var = 10;
  //$var += 7; //= $var + 7;
  //$var += 1; //= $var + 1;
  //$var -= 1; //= $var - 1;
  //$var += 12; //= $var + 12;
  //$var *= 7; //= $var * 7;
  $var -= 15; //= $var - 15;
  echo $var;
*/

/* ***************** ARRAYS ************** */
  /*1.  Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.*/

  $arr = ['Привет, ', 'мир', '!'];
  //$result = $arr[0].$arr[1].$arr[2];

  /*2. Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в первый элемент (то есть элемент с номером ноль) этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').*/

  $arr = ['Привет, ', 'мир', '!'];
  $arr[0] = 'Пока, '; //перезапишем первый элемент массива
  //var_dump($arr); //посмотрим на массив и убедимся в том, что он изменился
  /*3. Создайте массив заработных плат $arr. Выведите на экран зарплату Пети и Коли.*/
  $arr = ['Коля'=>'1000$', 'Вася'=>'500$', 'Петя'=>'200$'];
  $peater = $arr['Петя'];
  $nick = $arr['Коля'];

  /*4. Создайте массив $arr с элементами 1, 2, 3, 4, 5 двумя различными способами.*/

  //$arr = [1, 2, 3, 4, 5];
  $arr[] = 1;
  $arr[] = 2;
  $arr[] = 3;
  $arr[] = 4;
  $arr[] = 5;

  //var_dump($arr);

  /*5. Дан многомерный массив $arr, Выведите с его помощью слово 'голубой'.*/

  $arr = [
  'ru'=>['голубой', 'красный', 'зеленый'],
  'en'=>['blue', 'red', 'green'],
  ];

  $blue = $arr['ru'][0];

  /* ******** Работа с массивами ******** */
   /*1. Создайте массив $arr=['a', 'b', 'c']. Выведите значение массива на экран с помощью функции var_dump().*/

   $arr = ['a', 'b', 'c'];
   //var_dump($arr);

   /*2. С помощью массива $arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.*/

   $a = $arr[0];
   $b = $arr[1];
   $c = $arr[2];

   /*3. Создайте массив $arr=['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.*/

   $arr=['a', 'b', 'c', 'd'];
   $result1 = $arr[0].' + '.$arr[1];
   $result2 = $arr[2].' + '.$arr[3];

   /*4. Создайте массив $arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной $result. Выведите на экран значение этой переменной.*/

   $arr = [2, 5, 3, 9];
   //$result = ($arr[0]*$arr[1])+($arr[2]*$arr[3]);

   /*5. Заполните массив $arr числами от 1 до 5. Не объявляйте массив, а просто заполните его присваиванием $arr[] = новое значение.*/

   $arr[] = 1;
   $arr[] = 2;
   $arr[] = 3;
   $arr[] = 4;
   $arr[] = 5;
   //var_dump($arr);

  /* ********** Ассоциативные массивы ********** */
   /*6. Создайте массив $arr. Выведите на экран элемент с ключом 'c'.*/

  $arr = ['a'=>1, 'b'=>2, 'c'=>3];
  //var_dump($arr['c']);
  //$c = $arr['c'];

   /*7. Создайте массив $arr. Найдите сумму элементов этого массива.*/

  $arr = ['a'=>1, 'b'=>2, 'c'=>3];
  //$result = $arr['a'] + $arr['b'] + $arr['c'];


   /*8. Создайте массив заработных плат $arr. Выведите на экран зарплату Пети и Коли.*/

  $arr = ['Коля'=>'1000$', 'Вася'=>'500$', 'Петя'=>'200$'];
  $salaryP = $arr['Петя'];
  $salaryN = $arr['Коля'];

   /*9. Создайте ассоциативный массив дней недели. Ключами в нем должны служить номера дней от начала недели (понедельник - должен иметь ключ 1, вторник - 2 и т.д.). Выведите на экран текущий день недели.*/

   $week = [1 => 'Monday', 2 => 'Tuesday', 3 => 'Wednesday', 4 => 'Thursday', 5 => 'Friday', 6 => 'Saturday', 7 => 'Sunday'];
   $today = $week[7];
   //var_dump($today);

   /*10. Пусть теперь номер дня недели хранится в переменной $day, например там лежит число 3. Выведите день недели, соответствующий значению переменной $day.*/

   $day = 3;
   $today = $week[$day];


  /* ****** Многомерные массивы ********** */
   /*11. Создайте многомерный массив $arr. С его помощью выведите на экран слова 'joomla', 'drupal', 'зеленый', 'красный'.*/

  $arr = [
  	'cms'=>['joomla', 'wordpress', 'drupal'],
  	'colors'=>['blue'=>'голубой', 'red'=>'красный', 'green'=>'зеленый']
  ];

  $joomla = $arr['cms'][0];
  $drupal = $arr['cms'][2];
  $green = $arr['colors']['green'];
  $red = $arr['colors']['red'];
  //echo($joomla.', '.$drupal.', '.$green.', '.$red);

   /*12. Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это первый день).*/

   $week = [
     'ru' => [1 => 'Понедельник', 2 => 'Вторник', 3 => 'Среда', 4 => 'Четверг', 5 => 'Пятница', 6 => 'Суббота', 7 => 'Воскресенье'],
     'en' => [1 => 'Monday', 2 => 'Tuesday', 3 => 'Wednesday', 4 => 'Thursday', 5 => 'Friday', 6 => 'Saturday', 7 => 'Sunday']
   ];
   $ruDay1 = $week['ru'][1];
   $enDay3 = $week['en'][3];

   /*13. Пусть теперь в переменной $lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной $day - номер дня. Выведите словом день недели, соответствующий переменным $lang и $day. То есть: если, к примеру, $lang = 'ru' и $day = 3 - то выведем 'среда'.*/

   $lang = 'en';
   $day = 5;
   $result = $week[$lang][$day];
   echo $result;

   /************ LOGICAL CONSTRACTIONS *************/

  include('index.phtml');
?>
