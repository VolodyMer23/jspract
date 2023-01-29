// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// // Джаз, Блюз
// // Джаз, Блюз, Рок-н-ролл
// // Джаз, Классика, Рок-н-ролл
// // Классика, Рок-н-ролл
// // Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");

// styles.splice(1, 1, "Классика");

// console.log(styles.shift());

// styles.unshift("Рэп", "Регги");

// console.log(styles);
// console.table(styles);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const users = ['Mango', 'Poly', 'Ajax'];

// function logItems(array){
//     for (let i = 0; i < users.length; i += 1)  {
// console.log(i, users[i])
//     }

// }
// logItems();

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// // 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// // 2) перепишіть функцією findSmallestNumber(numbers)
// // // console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// // // console.log(findSmallestNumber([49, 4, 83, 7, 12]));

//     let total = numbers[0];

// for (const number of numbers) {

//     if (total < number) {
//         total = number;

//     }
// }

//  console.log(total);

// function findSmallestNumber(numbers) {

//     let total = numbers[0];

//     for (const number of numbers) {

//     if (total < number) {
//         total = number;

//     }
//     }
//     return total

// }

// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// / ЗАДАЧА 4

// Провірте , чи являється рядок полідромом
// const str = "ротатор";//true
// const newString = "Hello";//false

// Варіант 1
// const string = newString.split("");
// // console.log(string);
// string.reverse();

// const word = string.join('');

// console.log(newString === word);

// Варіант 2
// const word = newString.split("").reverse().join("");
// console.log(newString === word);

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// // console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// // console.log(calculateAverage(14, 8, 2)); // 8
// // console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// function calculateAverage() {

//     let total = 0;

//     const numbers = Array.from(arguments);
//     for (const argument of arguments) {
//         total += argument;
//      }
//     const result = total / arguments.length;
//     return result;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь"));//Привіт Василь
// console.log(greet());//Привіт гість

// function greet(name = "гість") {
//     let message = `Привіт ${name}`;
//     return message
// }

// console.log(greet("Василь"));//Привіт Василь
// console.log(greet());//Привіт гість

// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію
// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }

// const checkNumbers = function(a, b) {
//     if (a > b) {
//             return `число ${a} більше ${b}`;
//           }

//           return `число ${b} більше ${a}`;
// }

// const checkNumbers = (a, b) => {
//     if (a > b) {
//      return `число ${a} більше ${b}`;
//     }

//      return `число ${b} більше ${a}`;
// }

// const checkNumbers = (a, b) => a > b ? `число ${a} більше ${b}` : `число ${b} більше ${a}`;
// console.log(checkNumbers(5, 10)

// ЗАДАЧА 8
// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// // capitalize('the quick brown fox')// 'The Quick Brown Fox '

// function capitalize(string) {
//   const stringArray = string.split(" ");
//   const resArray = [];

//   for (const element of stringArray) {
//     const lowWord = element[0].toUpperCase();

//     // console.log(lowWord);

//     const newElement = element.slice(1);
//     // console.log(newElement);

//     const result = `${lowWord}${newElement}`;
//     console.log("Рез", result);

//     resArray.push(result);
//   }

//   return resArray.join(" ");
// //   console.log(stringArray);
// }

// console.log(capitalize("the quick brown fox"));

// ЗАДАЧА 10
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log(Object.keys(user));

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key} - ${user[key]}`);
// }

ЗАДАЧА 2
У вас є обєкт , у якому зберігаються зарплати нашої команди.
Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ


 const salaries = {
   John: 100,
   Ann: 160,
   Pete: 130,
 };
ЗАДАЧА 3
Створи обєкт calculator(калькулятор) з 3-ма методами:
read()- запрошує 2 значення і зберігає їх як значення обєкта;
sum() -повертає суму збережених значень; 
mult() -перемножує значення збережені і повертає результат;

 const calculator = {
 a: null,
 b: null,

  read() {},

  sum() {},

  mult() {},
};