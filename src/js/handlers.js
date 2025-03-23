// Функції, які передаються колбеками в addEventListners
import { getProductsByCategories } from "./products-api";
import { renderProductsList } from "./render-function";

const productsList = document.querySelector('.products');
const categoriesList = document.querySelector('.categories');
// const allButtons = document.querySelectorAll('.categories__btn')


export async function handleClickCategory(event) {
    if (event.target.nodeName === "BUTTON") {
        const contentInfo = event.target.textContent;
        const previousActiveBtn = document.querySelector('.categories__btn--active');
        if (previousActiveBtn) {
            previousActiveBtn.classList.remove("categories__btn--active");
        }
        
        event.target.classList.add("categories__btn--active");
        const products = await getProductsByCategories(contentInfo);
        productsList.innerHTML = "";
        renderProductsList(products);
    }
}



