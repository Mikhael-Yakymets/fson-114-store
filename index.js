import"./assets/styles-BK7AYJoX.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";const n="https://dummyjson.com/products";o.defaults.baseURL=n;async function s(){const{data:t}=await o("/category-list");return console.log(t),t}const c=document.querySelector(".categories");function i(t){t.unshift("All");const e=t.map(a=>`<li class="categories__item">
   <button class="categories__btn" type="button">${a}</button>
 </li>`).join("");c.insertAdjacentHTML("beforeend",e)}async function r(){i(await s())}r();
//# sourceMappingURL=index.js.map
