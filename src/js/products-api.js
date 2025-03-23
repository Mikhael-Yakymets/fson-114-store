// Функції для роботи з бекендом

import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

axios.defaults.baseURL = BASE_URL;

export async function getCategories() {
  const { data } = await axios(`/category-list`);

  console.log(data);
  return data;
}

export async function getProducts(currentPage = 1) {
  const { data } = await axios(`?limit=12&skip=${(currentPage - 1) * 12}`);

  return data.products;
}

export async function getProductsByCategories(category,currentPage = 1) {
  const { data } = await axios(`/category/${category}?limit=12&skip=${(currentPage - 1) * 12}`);

  return data.products;
}
