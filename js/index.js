// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// let name = 'ГАЛИНА';
// let age = 35;
// let lang = 'JAVASCRIPT';

// let message =  `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${lang}`;

// console.log(message);


// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Введіть своє ім*я");
// const email = prompt("Введіть свою пошту");
// const tel = prompt("Введіть свій телефон");

// const message = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${email} ПОЧТУ І ${tel} ТЕЛЕФОН`;
// console.log(message)


// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const tv = Number(prompt("Введіть ціну телевізора"));
// const phone = Number(prompt("Введіть ціну телефону"));
// const computer = +prompt("Введіть ціну комп'ютеру");

// const sum = tv + phone + computer;
// console.log(sum);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const number = Number(prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК?"));

// if (number === 12) {
//     console.log("Вірно");
// } else {
//     console.log("НЕ ЗНАЄТЕ? 12");
// }

// const month = number === 12 ? "Вірно" : "НЕ ЗНАЄТЕ? 12";
// console.log(month);

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦІЛЕ ЦЕ ЧИСЛО, ЧИ НЕ ЦІЛЕ

// const user = Number(prompt("Введіть число"));

// if (user % 2 === 0) {
//     console.log("Ціле");
// } else {
//     console.log("Не ціле");
// }

// const number = user % 2 === 0 ? "Ціле" : "Не ціле";
// console.log(number)

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const question = prompt("В якому мiсяцi ти народівся?")

// if (question === 12 || question === 1 || question ===2) {
//   console.log("зима");
// } else if (question >= 3 && question <= 5) {
//     console.log("весно");
// } else if (question >= 6 && question <= 8) {
//        console.log("літо");
// } else if (question >= 9 && question <= 11) {
//     console.log("осінь");
// } else {
//     console.log("не коректна пора року");
// }

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

// const login = "LV.gmail.com";
// const parol = "GOIT";

// const loginUser = prompt("Введіть свій логін");
// const parolUser = prompt("Ведіть свій пароль");

// const result = loginUser === login && parolUser === parol ? "Вітаю" : "Дані не коректні";
// console.log(result);

 
