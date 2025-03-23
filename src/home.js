//Логіка сторінки Home

import { getCategories, getProducts } from './js/products-api';
import { categoryMarcup, renderProductsList } from './js/render-function';

// getCategories();
// categoryMarcup();

async function initialHomePage() {
  categoryMarcup(await getCategories());
  renderProductsList(await getProducts());
}

initialHomePage();

// getProducts();
