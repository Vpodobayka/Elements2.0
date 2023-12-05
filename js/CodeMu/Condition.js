// if (операция сравнения) {
// 	/*
// 		расположенный здесь код выполниться,
// 		если результат операция сравнения верный
// 	*/
// } else {
// 	/*
// 		расположенный здесь код выполниться,
// 		если результат операция сравнения неверный
// 	*/
// }

// let test = 1;
// if (test > 0) {
//   console.log('+++'); // сработает это
// } else {
//   console.log('---');
// }

// let test = -1;
// if (test > 0) {
//   console.log('+++');
// } else {
//   console.log('---'); // сработает это
// }

// let test = 0;
// if (test > 0) {
// 	console.log('+++');
// } else {
// 	console.log('---'); // сработает это
// }

// let test = 0;

// if (test >= 0) {
// 	console.log('+++'); // сработает это
// } else {
// 	console.log('---');
// }

// let test = 0;

// if (test < 0) {
// 	console.log('+++');
// } else {
// 	console.log('---'); // сработает это
// }

// let test = 0;

// if (test <= 0) {
// 	console.log('+++'); // сработает это
// } else {
// 	console.log('---');
// }

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// let test = 20;
// if (test > 10) {
//   console.log('more'); // work
// } else {
//   console.log('min');
// }

// let test = 9;
// if (test > 9) {
//   console.log('more');
// } else {
//   console.log('min'); // work
// }

// let test = 10;
// if (test >= 10) {
//   console.log('more 10');
// } else {
//   console.log('min');
// }

// let test = 10;
// if (test <= 10) {
//   console.log('more');
// } else {
//   console.log('min');
// }

//* Проверка на равенство

// let test = 0;

// if (test == 0) {
// 	console.log('+++'); // сработает это
// } else {
// 	console.log('---');
// }

// let test = 1;

// if (test == 0) {
// 	console.log('+++');
// } else {
// 	console.log('---'); // сработает это
// }

// let test = 10;
// if (test == 10) {
//   console.log('eq');
// } else {
//   console.log('not eq');
// }

// Проверка на неравенство

// let test = 1;
// if (test != 0) {
//   console.log('+++'); /// work
// } else {
//   console.log('---');
// }

// let test = 0;
// if (test != 0) {
//   console.log('+++');
// } else {
//   console.log('---'); /// work
// }

// let test = 9;
// if (test != 10) {
//   console.log('+++'); // work
// } else {
//   console.log('----');
// }

//* Сравнение переменных

// let test1 = 1;
// let test2 = 2;
// if (test2 > test1) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// test1 = 15;
// test2 = 20;
// if (test1 > test2) {
// console.log('+++');
// } else {
//   console.log('----');// work
// }

// let test1=10;
// let test2= 20;
// if (test1 == test2) {
//   console.log('+++');
// } else {
//   console.log('----');// work
// }

//  Равенство строк

// test = 'abc';
// if (test == 'abc') {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test1 = 'abc';
// let test2 = 'zxc';
// if (test1 == test2) {
//   console.log('+++');
// } else {
//   console.log('----'); // work
// }

//* Равенство строк и чисел

// if ('3' == 3) {
//   console.log('+++'); //work
// } else {
//   console.log('----');
// }

// let test1 = '123';
// let test2 = 123;
// if (test1 == test2) {
//   console.log('+++'); // work
// } else {
//   console.log('----');
// }

//* Равенство по значению и типу
//* Для этого вместо оператора == следует использовать оператор ===. В следующем примере при сравнении строки '3' и числа 3 условие будет ложным, так как переменные, хотя и равны по значению, но не равны по типу:
// if ('3' === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---'); // сработает это
// }

// let test1 = '3';
// let test2 = '3';

// if (test1 == test2) {
// 	console.log('+++'); // work
// } else {
// 	console.log('---');
// }

// let test1 = '3';
// let test2 = '3';

// if (test1 === test2) {
// 	console.log('+++'); // work
// } else {
// 	console.log('---');
// }

// let test1 = 3;
// let test2 = '3';

// if (test1 == test2) {
// 	console.log('+++'); // work
// } else {
// 	console.log('---');
// }

// let test1 = 3;
// let test2 = '3';

// if (test1 === test2) {
// 	console.log('+++');
// } else {
// 	console.log('---'); // work
// }

//* Неравенство по значению и типу

//*кроме оператора != существует также оператор !==, учитывающий тип при сравнении.

// let test1 = '3';
// let test2 = '3';

// if (test1 != test2) {
// 	console.log('+++');
// } else {
// 	console.log('---'); // work
// }

// let test1 = '3';
// let test2 = '3';

// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---'); // work
// }

// let test1 = 3;
// let test2 = '3';

// if (test1 != test2) {
// 	console.log('+++');
// } else {
// 	console.log('---'); // work
// }

// let test1 = 3;
// let test2 = '3';
// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test1 = 3;
// let test2 = 2;
// if (test1 !== test2) {
// 	console.log('+++'); // work
// } else {
// 	console.log('---');
// }

//* Логическое И
//* Можно группировать операции сравнения с помощью оператора &&, представляющего собой логическое И. В следующем примере, если переменная num больше нуля и одновременно меньше 10, только тогда выведется '+++':

// let num = 3;
// if (num > 0 && num < 10) {
//   console.log('+'); // work
// } else {
//   console.log('-');
// }

// let num1 = 2;
// let num2 = 3;
// if (num1 == 2 && num2 == 3) {
//   console.log('+'); // work
// } else {
//   console.log('-');
// }

// let num = 3;
// if (num > 0 && num <5) {
//   console.log('+'); // work
// } else {
//   console.log('-');
// }

// let num = 10;
// if (num >= 10 && num <= 20) {
//   console.log('+'); // work
// } else {
//   console.log('-');
// }

// let num1 = 1;
// let num2 = 3;
// if (num1 <= 1 && num2 >=3) {
//   console.log('+'); // work
// } else {
//   console.log('-');
// }

//* Логическое ИЛИ
//*Оператор || представляет собой логическое ИЛИ и требует выполнения хотя бы одного условия.
//*В следующем примере, если переменная num1 больше 0 или переменная num2 больше 0, то условие будет истинно (достаточно выполнения хотя бы одного из условий):

// let num1 = 10;
// let num2 = -5;
// if (num1 > 0 || num2 > 0) {
//   console.log('+'); // work
// } else {
//   console.log('-');
// }

// let num1 = -10;
// let num2 = -10;
// if (num1 >= 0 || num2 >= 0) {
//   console.log('+');
// } else {
//   console.log('-'); // work
// }

// let num1 = 0;
// let num2 = 0;
// if (num1 >= 0 || num2 >= 0) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let num1 = 0;
// let num2 = 5;
// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++'); // work
// } else {
// 	console.log('---');
// }

// let num1 = 5;
// let num2 = 5;
// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++'); // work
// } else {
// 	console.log('---');
// }

// let num1 = -5;
// let num2 = 15;
// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 1;
// if (num == 0 || num == 1) {
// 	console.log('+++'); // work
// } else {
// 	console.log('---');
// }

// let num = 2;
// if (num == 0 || num == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---'); // work
// }

// let num = 2;
// if (num == 0 || num == 1 || num == 2) {
// 	console.log('+++'); // work
// } else {
// 	console.log('---');
// }

//* Приоритет логических операторов
//*Операция && имеет приоритет над ||.

// let num = 3;
// if (num > 0 && num < 0 || num > 10 && num < 20) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let num = 3;
// if (num == 0 || num > 1 && num < 5) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

//* Группировка условий

// let num = 3;
// if ((num > 0 && num < 5) || (num > 10 && num < 20)) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num1 = 3;
// let num2 = 5;

// if ((num1 > 0 && (num2 == 3 || num2 == 5))) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = 3;
// if (num > 5 && num < 10 || num == 20) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = 3;
// if (num > 5 || num > 0 && num < 3) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = 3;
// if (num == 9 || num > 10 && num < 20 || num > 20 && num
//   < 30) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

//* Инвертирование логических выражений

// let num = 7;
// if (!(num > 0 && num < 5)) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num1 = 3;
// let num2 = 7;
// if (!(num1 >= 0 || num2 <= 10)) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

//* Условия с булевыми значениями

// let test = true;
// if (test === true) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test = false;
// if (test === false) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

//* Сравнение значений с булевым типом

// let test = 1;

// if (test == true) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test = 0;

// if (test == true) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = 1;

// if (test == false) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = 1;

// if (test != true) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = '';

// if (test == false) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test;

// if (test == true) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = 3 * 'a';

// if (test == true) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

//* Сокращенная форма проверки на истину
// существует более изящная сокращенная форма: вместо if (test == true) можно написать просто if (test).

// let test = true;
// if (test) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// Сокращенная форма проверки на ложь

// let test = true;

// if (!test) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = true;
// if (test != false) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test = true;
// if (!test) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = true;
// if (test) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

//* Общая сокращенная форма проверки

// let test = 3;
// if (test) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test = 'abc';
// if (test) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test = '';
// if (test) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = '';
// if (test) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = null;
// if (test) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = false;
// if (test) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test;
// if (test) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = 0;
// if (test) {
//   console.log('+++');
// } else {
//   console.log('---'); // work
// }

// let test = '0';
// if (test) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test = -1;
// if (test) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

//*Сложные условия в сокращенной форме

// let test1 = true;
// let test2 = true;

// if (test1 || test2) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test1 = true;
// let test2 = true;
// if (test1 != test2) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test1 = true;
// let test2 = true;
// if (test1 == test2) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test1 = true;
// let test2 = true;
// let test3 = true;
// if (test1 && test2 && test3) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test1 = true;
// let test2 = true;
// let test3 = true;
// if (test1 && test2 && test3 != false) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let test1 = true;
// let test2 = true;
// let test3 = true;
// if (test1 || !test2 && !test3) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

//* Необязательность конструкции else

// let test = 10;
// if (test == 10) {
//   console.log('+++'); // work
// }

//* Необязательность фигурных скобок

// let test = 1;
// if (test > 0)
//   console.log('+++');// work
// else
//   console.log('---');

// let test = 1;
// if (test > 0)
//   console.log('+++');

//*Конструкция else if

// let day = 32;

// if (day >= 1 && day < 10) {
//   console.log("1 dekada");
// } else if (day >= 10 && day < 20) {
//   console.log(" 2 dekada");
// } else if (day >= 20 && day <= 31) {
//   console.log("3 dekada");
// } else {
//   console.log("dekada is not defined!");
// }

//* Вложенные конструкции

// let num = 3;
// if (num >= 0) {
//   if (num <= 5) {
//     console.log('меньше или равно 5'); // work
//   } else {
//     console.log('больше 5');
//   }
// } else {
//   console.log('меньше нуля');
// }

// let num = 33;
// if (num <= 9) {
//   console.log('меньше или равно 9');
// } if (num >= 10 && num <= 99) {
//   console.log('от 10 до 99');
// } if (num[0] + num[1]) {
//   console.log(num);
// }

// let num = 99;
// if (num >= 10 && num <= 99) {
//   let numString = String(num);
//   let numStringResult = (Number(numString[0]) + Number(numString[1]));
//   console.log(numStringResult);
//   if (numStringResult <= 9) {
//     console.log('сумма цифр однозначна!');
//   } else {
//     console.log('сумма цифр двухзначна!');
//   }
// } else {
//   console.log(num);
// }

//* Конструкция switch-case

// let num = 1;
// switch (num) {
//   case 1:
//     console.log('value 1 ');
//     break;
//   case 2:
//     console.log('value 2');
//     break;
//   case 3:
//     console.log('value 3');
//     break;
//   default:
//     console.log('incorrect value');
//     break;
// }

// let lang = 'ua'
// switch (lang) {
//   case 'ua':
//     console.log('Ukraine');
//     break;
//   case 'en':
//     console.log('English');
//     break;
//   case 'de':
//     console.log('Dutch');
//     break;
//   default:
//     console.log('язык не поддерживается');
//     break;
// }

//* Необязательность break в конструкции switch-case

// let num = 1;
// let res;

// switch (num) {
//   case 1:
//   case 2:
//     res = 'a';
//     break;
//   case 3:
//     res = 'b';
//     break;
// }

// console.log(res); // a

//* Тернарный оператор
// В данном уроке мы рассмотрим специальный тернарный оператор, представляющий собой сокращенный вариант конструкции if-else. Его синтаксис выглядит следующим образом:
// let переменная = условие ? значение1 : значение2;

// обычный вариант
// let age = 17;
// let adult;

// if (age >= 18) {
//   adult = true;
// } else {
//   adult = false;
// }

// console.log(adult); // false
/////////////
// let age = 22;
// let adult = age >= 18 ? true : false;
// console.log(adult); // true

// Тернарный оператор следует использовать только в самых простых случаях, так как его использование затрудняет понимание кода.

// let num = 1;
// let res;

// if (num >= 0) {
//   res = '1';
// } else {
//   res = '2';
// }
// console.log(res); // true // 1 //

// let age = 1;
// let adult = age >= 3 ? true : false;
// console.log(adult); // false // тюк больше 3х

//* Логические операции

// let a = 1;
// let b = 2;
// let result = a == b;
// console.log(result);

//* Функция confirm

// let ok = confirm('you norm ?');
// if (ok) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// let user = confirm('you 18 ear ?');
// if (user) {
//   console.log('18');
// } else {
//   console.log('not 18');
// }

//* Область видимости переменных в if-else

// if (true) {
//   let res = '!';
// }
// console.log(res);

// let res;
// if (true) {
//   res = '!';
// }
// console.log(res);

// let age = 17;
// let adult;

// if (age >= 18) {
//   adult = true;
// } else {
//   adult = false; // work
// }
// console.log(adult);

//* Нюансы области видимости переменных в конструкциях if-else

// let res = 1;

// if (true) {
//   let res = 2;
//   console.log(res); // выведет 2
// }

// console.log(res); // выведет 1

// let age = 22;
// let res;

// if (age >= 18) {
//   if (age <= 23) {
//     res = 'от 18 до 23';
//   } else {
//     res = 'больше 23';
//   }
// } else {
//   res = 'меньше 18';
// }

// console.log(res)

// let age = 24;
// let res;

// if (age >= 18) {

//   if (age <= 23) {
//     res = 'от 18 до 23';
//   } else {
//     res = 'больше 23';
//   }
// } else {
//   res = 'меньше 18';
// }

// console.log(res);

//* Проверка частей часа через if-else

//в какую четверть часа попадает указанное количество минут:
// let min = 10;

// if (min >= 0 && min <= 14) {
//   console.log('1 четверть');
// }
// if (min >= 15 && min <= 29) {
//   console.log('2 четверть');
// }
// if (min >= 30 && min <= 44) {
//   console.log('3 четверть');
// }
// if (min >= 45 && min <= 59) {
//   console.log('4 четверть');
// }

//	в какую треть часа попадает указанное количество минут.
// let min = 38;

// if (min >= 0 && min <= 19) {
//   console.log('1я треть');
// }
// if (min >= 20 && min <= 39) {
//   console.log('2я треть');
// }
// if (min >= 40 && min <= 60) {
//   console.log('3я треть');
// }

//* Проверка длины строк и массивов

// let str = '12345';

// if (str.length >= 3) {
//   console.log('!');
// }

// let arr = [1, 2, 3];
// if (arr.length > 3) {
//   console.log('> 3 elements');
// }
// else if (arr.length = 3) {
//   let arrSum = String(arr)
//   let arrRes = (Number(arr[0]) + Number(arr[1]) + Number(arr[2]));
//   console.log(arrRes);
// }

//* Проверка символов строки

// let str = '12345';
// let last = str[str.length - 1];

// if (last == 5) {
//   console.log('!');
// }

// let str = "abc"
// if (str[0] == 'a') {
//   console.log('a');
// }

// let str = 'azx';
// if (str[str.length - 1]) {
//   console.log('x');
// }

// let str = 'bac';
// if (str[0] == 'a') {
//   console.log('a');
// } else if (str[0] == 'b') {
//   console.log('b');
// }

//* Проверка цифр числа

// let num = 12345;

// if (num[0] == 1) {
//   console.log('+++');
// } else {
//   console.log('---'); // сработает это
// }

// Как вы уже должны знать, проблема в том, что можно обращаться к символам строки, но нельзя - к цифрам числа:
// Для решения проблемы преобразуем наше число в строку:

// let num = 12345;
// let str = String(num);

// if (str[0] == 1) {
//   console.log('+++'); // сработает это
// } else {
//   console.log('---');
// }

// Пусть теперь мы хотим проверить первую цифру на то, что она равна 1, либо 2. Напишем соответствующий код:

// let num = 12345;

// if (String(num)[0] == 1 || String(num)[0] == 2) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// или

// let num = 12345;
// let first = String(num)[0];

// if (first == 1 || first == 2) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = 220;
// let lastNum = String(num);
// if (lastNum[lastNum.length - 1] == 0) {
//   console.log('last 0');
// }

// let num = 12345678;
// let numStr = String(num);
// if (
//   numStr[numStr.length - 1] == 1 ||
//   numStr[numStr.length - 1] == 3 ||
//   numStr[numStr.length - 1] == 5 ||
//   numStr[numStr.length - 1] == 7 ||
//   numStr[numStr.length - 1] == 9) {
//   console.log('нечетные числа');
// } else {
//   console.log('четные числа');
// }

// let num = 2;
// switch (num) {
//   case 1:
//     console.log('нечетные числа');
//     break;
//   case 2:
//     console.log('четные числа');
//     break;
//   case 3:
//     console.log('нечетные числа');
//     break;
//   case 4:
//     console.log('четные числа');
//     break;
//   case 5:
//     console.log('нечетные числа');
//     break;
//   case 6:
//     console.log('четные числа');
//     break;
//   case 7:
//     console.log('нечетные числа');
//     break;
//   case 8:
//     console.log('четные числа');
//     break;
//   case 9:
//     console.log('нечетные числа');
//     break;
//   default:
//     console.log('incorrect value');
//     break;
// }

//* Проверка остатка от деления

// let a = 10;
// let b = 3;
// console.log(a % b); // выведет 1

// let a = 10;
// let b = 5;
// console.log(a % b); // выведет 0

// let a = 10;
// let b = 3;

// if (a % b === 0) {
//   console.log('делится нацело');
// } else {
//   console.log('делится с остатком'); // work
// }

// let a = 10;
// let b = 3;
// let rest = a % b;

// if (rest === 0) {
//   console.log('делится нацело');
// } else {
//   console.log('делится с остатком ' + rest);
// }

// let num1 = 10;
// let num2 = 3;
// if (num1 % num2 == 0) {
//   console.log('четное число');
// } else {
//   console.log('нечетное'); //work
// }

// let num = 6;
// let num1 = 3;
// if (num % num1 == 0) {
//   console.log('детится на 3'); // work
// } else {
//   console.log('не делится на 3');
// }

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

// let num1 = 1;
// let num2 = 2;

// if (num1 + num2 == 3) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = '123';

// if (Number(num[0]) === 1) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = '123';

// if (String(num)[0] == 1) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = 123;
// let first = String(num);

// if (first[0] == 1) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = 12;
// let num1 = String(num);
// if (num1.length == 2) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = 12;
// let str = String(num);

// if (str.length == 2) {
//   console.log('+++'); // work
// } else {
//   console.log('---');
// }

// let num = 12;
// let num1 = String(num);

// if (num1.length == 2) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = 12;
// let num1 = String(num);

// if (num1.length == 2) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = '123033'; // берем в кавычки, чтобы обращатьсяк цифрам

// let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
// let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

// if (sum1 == sum2) {
//   console.log('суммы равны');
// } else {
//   console.log('суммы не равны')
// } Number();

//////////////////////////
//////////////////////////
//////////////////////////

// let month = 11;
// if (month <= 2 || month == 12) {
//   console.log('zima');
// } else if (month >= 3 && month <= 5) {
//   console.log('vesna');
// } else if (month >= 6 && month <= 8) {
//   console.log('leto');
// } else if (month >= 9 && month <= 11) {
//   console.log('osen`');
// }

// - - - - - - - ----

// let month = 3;
// if (month == 12 || month == 1 || month == 2) {
//   console.log("зима");
// }
// else if (month == 3 || month == 4 || month == 5) {
//   console.log("весна");
// }
// else if (month == 6 || month == 7 || month == 8) {
//   console.log("лето");
// }
// else {
//   console.log("осень");
// }

// let str = 'abcde';
// if (str[0] == 'a') {
//   console.log('da');
// } else {
//   console.log('net');
// }

// let num = 12345;
// let num1 = String(num)

// if (num1[0] == 1 || num1[0] == 2 || num1[0] == 3) {
//   console.log('da');
// } else {
//   console.log('net');
// }

// let num = 123;
// let num1 = String(num)
// let res = Number(num1[0]) + Number(num1[1]) + Number(num1[2])
// console.log(res);

// let num = 123546;
// let num1 = String(num);
// let sum1 = Number(num1[0]) + Number(num1[1]) + Number(num1[2]);
// let sum2 = Number(num1[3]) + Number(num1[4]) + Number(num1[5]);
// if (sum1 == sum2) {
//   console.log('perfecto');
// } else {
//   console.log('baranka');
// }
