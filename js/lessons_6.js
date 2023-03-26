// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// const BASE_URL = "https://pixabay.com/api/";
// const API_KEY = "22926721-5d20aa08498ffd1ff2f906542";
// const elementWrapper = document.querySelector(".site-wrap");
// let page = 1;

// fetch(
//   `https://pixabay.com/api/?key=22926721-5d20aa08498ffd1ff2f906542&q=Lion&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
// )
//   .then((res) => res.json())
//   .then((elements) => sortFetchedArr(elements.hits))
//   .catch((error) => console.log(error));

// function imageCardEl({ largeImageURL, type }) {
//   const imageCardTemp = document.createElement("img");
//   imageCardTemp.src = largeImageURL;
//   imageCardTemp.alt = type;
//   elementWrapper.appendChild(imageCardTemp);
// }
// function sortFetchedArr(elements) {
//     for (const { largeImageURL, type } of elements) {
//         imageCardEl({ largeImageURL, type });
//     }
// }

// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const wrapper = document.querySelector(".render");

// form.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();

//   const userValue = input.value;

//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userValue}`)
//     .then((responce) => responce.json())
//     .then((data) => sortRender(data.drinks))
//     .catch((err) => console.log(err));
// }

// function render({ strDrink, strDrinkThumb, strCategory }) {
//   const murkUp = `<h2>${strDrink}</h2>
//   <img src="${strDrinkThumb}" alt="${strDrink}">
//   <p>${strCategory}</p>`;
//   wrapper.insertAdjacentHTML("beforeend", murkUp);
// }

// function sortRender(elements) {

//     elements.forEach((element) => render(element));
// }

// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
// //
// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)

// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const render = document.querySelector(".render");
// const loadMoreBtn = document.querySelector(".load-more");
// let count = 1;

// form.addEventListener("submit", handleFormSubmit);
// loadMoreBtn.addEventListener("click", handleFormSubmit);

// function handleFormSubmit(e) {
//   e.preventDefault();
//   const inputValue = input.value;

//   fetch(`https://api.github.com/search/users?q=${inputValue}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&per_page=5&page=${count}`)
//     .then((data) => data.json())
//     .then((data) => renderMarkup(data.items))
//     .then(() => (count += 1))
//     .catch((err) => console.log(err));
// }

// function renderMarkup(elements) {
//   const elementMarkup = elements.map(({ login, avatar_url }) => `<h2>${login}</h2><img src="${avatar_url}" alt="${login}">`).join("");
//   render.insertAdjacentHTML("beforeend", elementMarkup);
// }
