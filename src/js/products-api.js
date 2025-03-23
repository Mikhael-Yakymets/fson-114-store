// Функції для роботи з бекендом

import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

axios.defaults.baseURL = BASE_URL;

export async function getCategories() {
  const { data } = await axios(`/category-list`);

  console.log(data);
  return data;
}
