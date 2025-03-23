//Логіка сторінки Home

import { getCategories } from './js/products-api';
import { categoryMarcup } from './js/render-function';

// getCategories();
// categoryMarcup();

async function initialHomePage() {
  categoryMarcup(await getCategories());
}

initialHomePage();
