// 3) УМОВА
// Зробити фіксований скрол на сторінці для менюшки,тобто , щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

const header = document.querySelector(".header");
const heightHeader = header.clientHeight;
const navigation = document.querySelector("#navigation");

function addClassHeader() {
  if (pageYOffset > heightHeader) {
    navigation.classList.add("fixed-nav");
  } else {
    navigation.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", addClassHeader);

console.log(header.clientHeight);

// scrollY - новий метод, треба перевірити, чи підтримуються усіма браузерами