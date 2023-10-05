// let obj = { 1: 'a', 2: 'b', 3: 'c' }
// console.log(obj); //{1: 'a', 2: 'b', 3: 'c'}


// let obj = {
//   1: 'monday',
//   2: 'tyesday',
//   3: 'wednesday',
//   4: 'thursday',
//   5: 'friday',
//   6: 'saturday',
//   7: 'sunday'
// }
// console.log(obj);


// let obj = { 1: 2, 2: 3, 3: 4 };
// console.log(obj);


// let obj = {
//   '1': 2,
//   '2': 3,
// }
// console.log(obj['1']);


// let user = {
//   names : 'Kostyantyn',
//   surname : 'Suvorov',
//   patronymic : 'Mihaylovish'
// }
// console.log(user.surname + ' ' + user.names + ' ' + user.patronymic);
// console.log(user['surname'] + ' ' + user['names'] + ' ' + user['patronymic']);


// let date = {
//   'year' : 2023,
//   'month' : 'April',
//   'day' : 20
// }
// document.write(date.year + ' ' + date.month + ' ' + date.day)


// let obj = {
// 	'1a': 1,
// 	'b2': 2,
// 	'c-c': 3,
// 	'd 4': 4,
// 	'e5': 5
// };
// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);


// let obj = {
//   '1a': 1,
//   'b2': 2,
//   'c-c': 3,
//   'd 4': 4,
//   'e5': 5
// };
// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);


// let obj = {a: 1, b: 2, c: 3};
// obj['a'] = '!';
// obj.b = '!';
// console.log(obj);  // {a: '!', b: '!', c: 3}


// let obj = {
//   x: 1,
//   y: 2,
//   z: 3
// };
// console.log(obj.x ** 2, obj.y ** 2, obj.z ** 2); // 1 4 9


//Добавление элементов//

// let obj = {};
// obj['a'] = 1;
// obj['b'] = 2;
// obj['c'] = 3;
// console.log(obj); // {a: 1, b: 2, c: 3}
// obj.a = 1;
// obj.b = 2;
// obj.c = 3;
// console.log(obj); // {a: 1, b: 2, c: 3}


//Неупорядоченность объектов//

// let obj = {1: 'a', 2: 'b', 3: 'c'};
// console.log(obj[1]); // выведет 'a'
// console.log(obj[2]); // выведет 'b'
// console.log(obj[3]); // выведет 'c'


// let obj = {3: 'c', 1: 'a', 2: 'b'};
// console.log(obj[1]); // выведет 'a'
// console.log(obj[2]); // выведет 'b'
// console.log(obj[3]); // выведет 'c'


// let obj = {7: 'a', 50: 'b', 23: 'c'};
// console.log(obj); //  {7: 'a', 23: 'c', 50: 'b'}


//Массив ключей объекта///

// let obj = {a: 1, b: 2, c: 3};
// let keys = Object.keys(obj);
// console.log(keys);['a', 'b', 'c'] //  ['a', 'b', 'c']


// let obj = {x: 1, y: 2, z: 3};
// let keys = Object.keys(obj);
// console.log(keys);


//Длина объекта//

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length); // 3, Длина массива ключей


//Ключи объектов из переменных//

// let obj = {a: 1, b: 2, c: 3};
// let key = 'a';
// console.log(obj[key]); // 1


// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]); // 1


// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj['key']); // undefined, т.к обращение к переменной где хранится ключ не тсвятся кавычки
// console.log(obj[key]); // 1


// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']); // 1


// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]); // 1

//
// Единственным способом обратиться к элементу по ключу из переменной является запись этой переменной в квадратных скобках:
// console.log(obj[key])
//

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]); // 1


// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]); // 1


//Вычисляемые свойства//

// let key = 'lol';
// let obj = {
//   [key]: 1,
// 	b: 2,
// 	c: 3
// };
// console.log(obj);


// let key = 'lol'
// let obj = {
// 	[key + '1']: 1,
// 	[key + '2']: 2,
// 	[key + '3']: 3
// };
// console.log(obj);


// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
// let obj = {
// 	x: 1,
// 	y: 2,
// 	z: 3
// };
// console.log(obj[key1], obj[key2], obj[key3]); // 1 2 3


//Оператор in//

// let obj = {
//   a:1,
//   b:2,
//   c:3
// }
// console.log('b' in obj); // true
// console.log('x' in obj); // false, т.к такого ключа не существует.


//Оператор delete//

// let obj = {
//   a:1,
//   b:2,
//   c:3
// }
// delete obj.b
// console.log(obj); // {a: 1, c: 3}


// let obj = {x: 1, y: 2, z: 3};
// delete obj.x;
// console.log('x' in obj); // false, т.к ранее мы его удалили.


//Типизация объектов//

// console.log( typeof {x: 1, y: 2, z: 3} ); // object
// console.log( typeof {} ); // object


// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj['x'] ); // number


//Массивы как объекты//
// Массивы на самом деле являются частным случаем объектов. В этом можно убедится, если проверить массив через оператор typeof:
// console.log(typeof []); // выведет 'object'

// console.log( typeof {x: 1, y: 2, z: 3} ); // object
// console.log( typeof [1, 2, 3] ); // object


// let arr = [1, 2, 3];
// console.log( typeof arr );// object


// let arr = [1, 2, 3];
// console.log( typeof arr[0] ); // number


// let arr = ['1', '2', '3'];
// console.log( typeof arr[0] ); // string


//Отличаем массивы от объектов

// Как было указано выше, оператор typeof не позволяет различать массивы и объекты. Иногда, однако, это необходимо сделать. На помощь придет функция Array.isArray():

// console.log( Array.isArray([]) ); // выведет true
// console.log( Array.isArray({}) ); // выведет false
// console.log( Array.isArray([1, 2, 3]) );  // выведет true
// console.log( Array.isArray({x: 1, y: 2, z: 3}) ); // выведет false


// Объекты и примитивы
// В JavaScript 7 примитивных типов данных :
// string
// number
// boolean
// null
// undefined
// symbol
// bigint

// let test = {x: 1, y: 2, z: 3};
// console.log(typeof test); //{x: 1, y: 2, z: 3}


// let test = {x: 1, y: 2, z: 3};
// console.log(typeof test.x); // 1 // number


// let test = [1, 2, 3];
// console.log(typeof test); // object


// let test = [1, 2, 3];
// console.log(typeof test[1]); // number


// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1); //  [1, 2, 3]// object
// console.log(test2); //  1 // number


// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1[test2]); // 2


//Передача объектов по ссылке//
// Массивы и объекты несколько отличаются от остальных примитивных типов данных. Отличие в том, что переменная, хранящая массив, на самом деле не содержит его, а просто ссылается на него.

// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = obj1;
// obj2.a = '!';
// console.log(obj1);


// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// console.log(arr2); // ['a', 2, 3]


// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[1] = 'b';
// console.log(arr1); // ['a', 'b', 3]


// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[0] = 'b';
// console.log(arr2);


//Константы с массивами или объектами//
// JavaScript не разрешает изменять значения этих констант, но изменять свойства объектов и значения элементов массивов - можно.

// const obj = {a: 1, b: 2, c: 3};
// obj = 123;
// console.log(obj); // ошибка
// obj = {x: 1, y: 2, z: 3};
// console.log(obj);// ошибка
// obj.a = '+'; // работает!
// console.log(obj); // {a: '+', b: 2, c: 3}


// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr); //['a', '!', 'c']


//Подход программирования через константы//
// const a = 1;
// const b = 2;
// const c = a + b;
// console.log(c);


// const arr = [1, 2, 3, 4, 5];
// const res = arr[1] + arr[2];
// console.log(res);


// let obj = {x: 1, y: 2, z: 3};
// let sum = obj['x'] + obj['y'] + obj['x'];
// console.log(obj);
// console.log(sum);


// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj)); // ['x', 'y', 'z']
// console.log(Object.keys(obj).length); // 3


// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj));


// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);
