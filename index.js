import"./assets/styles-BK7AYJoX.js";import{a as c}from"./assets/vendor-N5iQpiFS.js";const u="https://dummyjson.com/products";c.defaults.baseURL=u;async function p(){const{data:t}=await c("/category-list");return console.log(t),t}async function d(t=1){const{data:s}=await c(`?limit=12&skip=${(t-1)*12}`);return s.products}const l=document.querySelector(".categories"),_=document.querySelector(".products");function m(t){t.unshift("All");const s=t.map(a=>`<li class="categories__item">
   <button class="categories__btn" type="button">${a}</button>
 </li>`).join("");l.insertAdjacentHTML("beforeend",s)}function g(t){const s=t.map(({id:a,thumbnail:o,title:r,brand:e,category:n,price:i})=>`<li class="products__item" data-id="${a}">
    <img class="products__image" src="${o}" alt=""/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${e}</span></p>
    <p class="products__category">Category: ${n}</p>
    <p class="products__price">Price: $ ${i}</p>
 </li>`).join("");_.insertAdjacentHTML("beforeend",s)}async function y(){m(await p()),g(await d())}y();
//# sourceMappingURL=index.js.map
