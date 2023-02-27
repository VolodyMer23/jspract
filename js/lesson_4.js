// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement
// js/

// import cars from "./data/cars.js"

// const carsCardEl = document.querySelector(".js-goods");
// console.log(carsCardEl);

// const getCard = ({name, img, price, description} ) => {
// const cardEl = document.createElement("li");

// const nameEl = document.createElement("h2");
// nameEl.textContent = name;
// const pictureEl = document.createElement("img");
// pictureEl.src = img;
// pictureEl.alt = name;
// pictureEl.width = 300;

// const priceEl = document.createElement("p");
// priceEl.textContent = price;

// const descrEl = document.createElement("p");
// descrEl.textContent = description;

// cardEl.append(nameEl, pictureEl, priceEl, descrEl);
// console.log(cardEl)
// return cardEl;

// }
// const keys = cars.map(getCard)

// carsCardEl.append(...keys);

// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН,

// const refs = {
//   priceEl: document.querySelector("#price"),
//   quantityEl: document.querySelector("#quantity"),
//   totalEl: document.querySelector(".total"),
//   formEl: document.querySelector(".form"),
//   amountEl: document.querySelector(".amount"),
//   formCont: document.querySelector('.container'),
// };

// console.log(refs);

// function calculator(e) {
//   e.preventDefault();
//     const price = refs.priceEl.value;
//     const quantity = refs.quantityEl.value;

//     const total = price * quantity;

//     refs.totalEl.textContent = total;

//     refs.amountEl.textContent = quantity;

// return total;
// }

// calculator();
// console.log(calculator());

// window.addEventListener("DOMContentLoaded", calculator);
// refs.formEl.addEventListener("submit", calculator);

// // ЗАДАЧА 2.2
// // ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ ,
// // ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// // <button class="btn">Calculate</button>

// function changeInputValue() {
//   const price = refs.priceEl.value;
//     const quantity = refs.quantityEl.value;
//     refs.amountEl.textContent = quantity;
// }

// refs.quantityEl.addEventListener('input', changeInputValue);

// // ЗАДАЧА 2.3
// // НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КАЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// refs.formCont.style.backgroundColor = randomRgbColor();

// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК через < ul class="js-list" ></ul >

// const instruments = [{
//   id: 1,
//   img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
//   name: "Молоток",
//   price: 150
// },
// {
//   id: 2,
//   img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
//   name: "Перфоратор",
//   price: 3000
// },{
//   id: 3,
//   img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
//   name: "Рівень",
//   price: 2000
//   }]

// const ulEl = document.querySelector(".js-list");
// console.log(ulEl);

// function createCards() {
//   const cardEl = instruments.map(({ id, img, name, price }) => {
//     return `<li data-id="${id}"><h2>${name}</h2>
//   <img width = "300" src="${img}" alt="${name}">
//   <p>${price}</p><button class = "buy">Купити</button>
// </li>`;}).join('');
//   ulEl.insertAdjacentHTML("beforeend", cardEl);
// }

// createCards();

// // 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР

// function buy(e) {
//   // console.log(e.target)
//   if (!e.target.classList.contains("buy")) {
//     return
//   }
//   // console.log(e.target.closest("li"));
//   const liEl = e.target.closest("li");
//   const id = liEl.dataset.id
//   console.log(id)
//   const findProduct = instruments.find(
//     (instrument) => instrument.id === Number(id)

//   );
//   //  console.log(findProduct);
// }

// ulEl.addEventListener("click", buy);

// ЗАДАЧА 4
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found
const people1 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
];

const people2 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Eva"],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

const people3 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Eva"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

// // Варіант Сергія Репінського
// function findNarciz(el) {
//   const man = el.find((people) => people.know.length === 0);

//   if (man !== undefined) {
//     console.log(man);
//   } else {
//     console.log("not found");
//     return;
//   }

//   const nameNarciz = man.name;
//   console.log("Імя нарциса:", nameNarciz);

//   const isEveryKnowNarciz = el
//     .filter((people) => people.name !== nameNarciz)
//     .every((elm) => elm.know.includes(nameNarciz));

//   if (isEveryKnowNarciz) {
//     console.log(`Всі знають нарциса ${nameNarciz}`);
//   } else {
//     console.log(`НЕ всі знають нарциса ${nameNarciz}`);
//   }
// }

// findNarciz(people1);
// findNarciz(people2);
// findNarciz(people3);


// вариант Игоря Вінника

// function findNarciz(element) {
//   const narciz = element.filter((el) => el.know.length === 0);
//   // console.log(narciz);
//   let nameNarciz;

//   for (const man of narciz) {
//     // console.log(man);
//     nameNarciz = man.name;
//   }
//   // console.log(nameNarciz);

//   if (narciz.length !== 0) {
//     console.log(`narciz: ${nameNarciz}`);
//   } else {
//     console.log("not found");
//     return;
//   }

//   const withotNarciz = element
//     .filter((el) => el.name !== nameNarciz)
//     .every((el) => el.know.includes(nameNarciz));
//   // console.log(withotNarciz);
//   if (withotNarciz === true) {
//     console.log(`Всі знають нарциса ${nameNarciz}`);
//   } else {
//     console.log(`Не всі знають нарциса ${nameNarciz}`);
//   }
// }

// findNarciz(people1);
// findNarciz(people2);
// findNarciz(people3);



// Варіант Юлія

// function findNarciz(el) {
//   const man = el.find((people) => people.know.length === 0);

//   if (man === undefined) {
//     console.log(`"Narciss is not found"`);
//     return;
//   }
//   const notNarcis = el.filter((people) => people.know.length !== 0);

//   const narcissName = man.name;
//   console.log(` Narciss is ${man.name}`);
//   let friends = [];

//   for (let nameAr of notNarcis) {
//     let friend = nameAr.know;

//     if (friend.includes(narcissName)) {
//       friends.push(friend);
//     }
//   }
//   if (friends.length === notNarcis.length) {
//     console.log(`"Everybody knows ${narcissName}"`);
//   } else
//     console.log(
//       `"Not everybody knows ${narcissName}, ${narcissName} isn't exactly narciss"`
//     );
// }
// findNarciz(people1);
// findNarciz(people2);
// findNarciz(people3);