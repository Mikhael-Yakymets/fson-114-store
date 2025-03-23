//Функцію для створення, рендеру або видалення розмітки

const categoriesList = document.querySelector('.categories');

export function categoryMarcup(categories) {
  categories.unshift('All');
  const markup = categories
    .map(category => {
      return `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>`;
    })
    .join('');

  categoriesList.insertAdjacentHTML('beforeend', markup);
}
