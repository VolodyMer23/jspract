// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя

function letMeSeeYourName (callback)  {
const name = prompt( "Введіть своє ім'я");
callback(name);

}

function greet(name) {
    console.log(`Привіт ${name}`);
    alert(`Привіт ${name}`);
}
letMeSeeYourName(greet);
