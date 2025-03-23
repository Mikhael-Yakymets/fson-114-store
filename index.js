import"./assets/styles-BK7AYJoX.js";import{a as s}from"./assets/vendor-N5iQpiFS.js";const d="https://dummyjson.com/products";s.defaults.baseURL=d;async function p(){const{data:t}=await s("/category-list");return console.log(t),t}async function l(t=1){const{data:e}=await s(`?limit=12&skip=${(t-1)*12}`);return e.products}async function g(t,e=1){const{data:c}=await s(`/category/${t}?limit=12&skip=${(e-1)*12}`);return c.products}const m=document.querySelector(".categories"),_=document.querySelector(".products");function y(t){t.unshift("All");const e=t.map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>`).join("");m.insertAdjacentHTML("beforeend",e)}function a(t){const e=t.map(({id:c,thumbnail:o,title:r,brand:n,category:i,price:u})=>`<li class="products__item" data-id="${c}">
    <img class="products__image" src="${o}" alt=""/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${n}</span></p>
    <p class="products__category">Category: ${i}</p>
    <p class="products__price">Price: $ ${u}</p>
 </li>`).join("");_.insertAdjacentHTML("beforeend",e)}const f=document.querySelector(".products");document.querySelector(".categories");async function b(t){if(t.target.nodeName==="BUTTON"){const e=t.target.textContent,c=document.querySelector(".categories__btn--active");c&&c.classList.remove("categories__btn--active"),t.target.classList.add("categories__btn--active");const o=await g(e);f.innerHTML="",a(o)}}const L=document.querySelector(".categories");async function $(){y(await p()),a(await l())}$();L.addEventListener("click",b);
//# sourceMappingURL=index.js.map
