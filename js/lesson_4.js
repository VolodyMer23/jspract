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

const refs = {
  priceEl: document.querySelector("#price"),
  quantityEl: document.querySelector("#quantity"),
  totalEl: document.querySelector(".total"),
  formEl: document.querySelector(".form"),
  amountEl: document.querySelector(".amount"),
  formCont: document.querySelector('.container'),
};

console.log(refs);

function calculator(e) {
  e.preventDefault();
    const price = refs.priceEl.value;
    const quantity = refs.quantityEl.value;

    const total = price * quantity; 

    refs.totalEl.textContent = total;

    refs.amountEl.textContent = quantity;

    // return total;
}


// calculator();
// console.log(calculator());

window.addEventListener("DOMContentLoaded", calculator);
refs.formEl.addEventListener("submit", calculator);


// ЗАДАЧА 2.2
// ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , 
// ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// <button class="btn">Calculate</button>

function changeInputValue() {
  const price = refs.priceEl.value;
    const quantity = refs.quantityEl.value;
    refs.amountEl.textContent = quantity;
}

refs.quantityEl.addEventListener('input', changeInputValue);

// ЗАДАЧА 2.3
// НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КАЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};

refs.formCont.style.backgroundColor = randomRgbColor();