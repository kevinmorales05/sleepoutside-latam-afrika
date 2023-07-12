import { getParam } from './utils.mjs';
import productList, { capitalizeWord, productListBySearch } from './productList.mjs';
import { loadHeaderFooter } from './utils.mjs';

const category = getParam('category');
productList('.product-list', category);

if (category) {
    productList('.product-list', category);
    const categoryName = document.querySelector('.category-name');
    categoryName.innerHTML = capitalizeWord(category);
  } else {
    productListBySearch('.product-list');
  }

loadHeaderFooter();

const categoryName = document.querySelector('.category-name');
categoryName.innerHTML = capitalizeWord(category);