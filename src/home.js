//Логіка сторінки Home

import {
  getCategories,
  getProducts,
} from './js/products-api';
import { handleClickCategory } from './js/handlers.js';
import { categoryMarcup, renderProductsList } from './js/render-function';

const categoryList = document.querySelector(".categories")
// getCategories();
// categoryMarcup();

async function initialHomePage() {
  categoryMarcup(await getCategories());
  renderProductsList(await getProducts());
}

initialHomePage();

// getProducts();

categoryList.addEventListener("click", handleClickCategory)

// handleClickCategory()