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
//   console.log('1 dekado');
// } else if (day >= 10 && day < 20) {
//   console.log(' 2 dekado');
// } else if (day >= 20 && day <= 31) {
//   console.log('3 dekado');
// } else {
//   console.log('dekado is not defined!');
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


