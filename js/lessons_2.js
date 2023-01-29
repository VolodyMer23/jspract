
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
// console.log(checkNumbers(5, 10));
