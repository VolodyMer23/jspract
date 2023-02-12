// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName (callback)  {
// const name = prompt( "Введіть своє ім'я");
// callback(name);

// }

// function greet(name) {
//     console.log(`Привіт ${name}`);
//     alert(`Привіт ${name}`);
// }
// letMeSeeYourName(greet);

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

// function makeProduct(name, price, callback) {
//     const product = {name, price, id: Date.now()};
//     callback(product);
// }

// function showProduct(product) {
//     console.log(product);
// }

// makeProduct("Холодильник", 10000, showProduct);