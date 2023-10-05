//* for loop

// for ( начальные команды; условие окончания; команды после прохода ) {
// 	тело цикла
// }


// for (let i = 1; i < 9; i++) {
//   console.log(i); // 1/2/3/4/5/6/7/8/
// }


// for (let i = 1; i <= 9; i += 2) {
//   console.log(i); //1/3/5/7/9/
// }


// for (let i = 10; i > 0; i--) {
//   console.log(i); //101/9/8/7/6/5/4/3/2/1
// }



// for (let i = 1; i <= 100; i++) {
//   console.log(i); // 1- 100
// }



// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }



// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }



// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }



// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }


//* for-of
//? Перебір массива циклом
// for (let переменнаяДляЭлемента of массив) {
// 	/*
// 		В переменнуюДляЭлемента по очереди
// 		будут попадать элементы перебираемого массива.
// 	*/
// }



// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//   console.log(elem); // 1/2/3/4/5
// }



// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let elem of arr) {
//   console.log(elem); // a/b/c/d/e
// }


//* Перебір обїекта циклом for in
//?
// for (let переменнаяДляКлюча in объект) {
//  }

// let obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//   // console.log(key); // 'a', 'b', 'c'
//   console.log(obj[key]); // 1/2/3
// }



// let obj = { x: 1, y: 2, z: 3 };
// for (let key in obj) {
//   // console.log(key); // x/y/z
//   // console.log(obj[key]); // 1/2/3
// }


//* цикл while
//?Цикл while будет выполняться до тех пор, пока истинно выражение, переданное ему параметром. Он позволяет выполнять произвольное количество итераций. Вот его синтаксис:
// while ( пока выражение истинно ) {
// 	выполняем этот код циклически;
// 	в начале каждого цикла проверяем выражение в круглых
// 		скобках
// }
// Цикл закончится, когда выражение перестанет быть истинным. Если оно было ложным изначально - то он не выполнится ни разу.


// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++
// }


//А теперь будем делить заданное число на 2 столько раз, пока результат не станет меньше 10:
// let num = 500;
// while (num > 100) {
//   num = num / 2;
// }
// console.log(num); // 62.5



// let num = 1;
// while (num <= 100) {
//   console.log(num);
//   num++
// }



// let num = 11;
// while (num <= 33) {
//   console.log(num);
//   num++
// }



// let num = 500;
// while (num < 1000) {
//   num = num * 3
// }
// console.log(num); // 1500


//* Цикл for для массивов

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]); // 1/2/3/4/5
// }



// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// в обратном порядке:
// for (let i = arr.length - 1; i > 0; i--) {
//   console.log(arr[i]);
// }



// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);
// }



// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 1; i < arr.length - 1; i++) {
//   console.log(arr[i]);
// }



// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }



// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }



//* Условия в циклах

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//   if (elem % 2 === 0)
//     console.log(elem); // 2/4
// }



// let arr = [2, 5, 9, 15, 1, 4];
// for (let elem of arr) {
//   if (elem > 3 && elem < 10) {
//     console.log(elem);
//   }
// }



// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// for (let key in obj) {
//   if (obj[key] % 2 == 1) {
//     console.log(obj[key]); // 1/3/5
//   }
// }



//* Накопление чисел в циклах

// let res = 0;
// for (let i = 1; i <= 5; i++) {
//   res = res + i;
// }
// console.log(res);



// let res = 0;
// for (let i = 1; i <= 5; i++) {
//   res += i;
// }
// console.log(res);



// let num = 0;
// for (let i = 2; i <= 4; i++) {
//   if (i % 2 === 0) {
//     num += i;
//   }
// }
// console.log(num);



// let num = 0;
// for (let i = 2; i <= 4; i++) {
//   if (i % 2 === 1) {
//     num += i; // 3
//   }
// }
// console.log(num);



// let num = 1;
// for (let i = 1; i <= 20; i++) {
//   num *= i
//   console.log(num); //
// }
// console.log(num);

////! ----------------------------
//! [ Start2 lean Themes ]  ------
////! ----------------------------




