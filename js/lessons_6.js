// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "22926721-5d20aa08498ffd1ff2f906542";
const elementWrapper = document.querySelector(".site-wrap");
let page = 1;

fetch(
  `https://pixabay.com/api/?key=22926721-5d20aa08498ffd1ff2f906542&q=Lion&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
)
  .then((res) => res.json())
  .then((elements) => sortFetchedArr(elements.hits))
  .catch((error) => console.log(error));

function imageCardEl({ largeImageURL, type }) {
  const imageCardTemp = document.createElement("img");
  imageCardTemp.src = largeImageURL;
  imageCardTemp.alt = type;
  elementWrapper.appendChild(imageCardTemp);
}
function sortFetchedArr(elements) {
    for (const { largeImageURL, type } of elements) {
        imageCardEl({ largeImageURL, type });
    }
}
