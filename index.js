import{a as q,S as M,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function f(s,t=1){try{return(await q.get("https://pixabay.com/api/",{params:{key:"51852329-0f9f7a5b812c170a88122fd74",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}catch(r){throw console.error("Error fetching images:",r),r}}let P=new M(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(s){const t=s.map(({webformatURL:r,largeImageURL:c,tags:e,likes:o,views:i,comments:w,downloads:S})=>`<li class="gallery-item">
          <a class="gallery-item-link" href="${c}">
            <img class="gallery-item-img" src="${r}" alt="${e}" />
          </a>
          <div class="gallery-description-container">
            <div class="gallery-img-info">
              <h5>Likes</h5>
              <p>${o}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Views</h5>
              <p>${i}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Comments</h5>
              <p>${w}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Downloads</h5>
              <p>${S}</p>
            </div>
          </div>
        </li>`).join("");L.insertAdjacentHTML("beforeend",t),P.refresh()}function E(){L.innerHTML=""}function p(){v.classList.remove("hidden")}function l(){v.classList.add("hidden")}function b(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}const B={form:document.querySelector(".form"),buttonInput:document.querySelector(".js-button-search"),inputSearch:document.querySelector(".js-input-search"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-bt")},{form:m,buttonInput:j,inputSearch:O,galleryList:L,loader:v,loadMoreBtn:h}=B;let n=1,d="",u=0;document.addEventListener("DOMContentLoaded",()=>{l(),g()});m.addEventListener("submit",async s=>{s.preventDefault(),n=1,g();const t=O.value.trim();if(!t){a.show({message:"Please enter a search term before submitting.",position:"topRight",backgroundColor:"#5c1e18",messageColor:"#bcbcbc"});return}d=t,E(),p();try{const r=await f(d,n);l(),r.hits.length>0?(u=Math.ceil(r.totalHits/15),y(r.hits),u>1?b():a.info({title:"Message",message:"We're sorry, but you've reached the end of search results."})):a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(r){l(),a.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(r)}finally{m.reset()}});h.addEventListener("click",async()=>{n+=1,g(),p();try{const s=await f(d,n);if(l(),s.hits.length>0){y(s.hits);const t=document.querySelector(".gallery-item");if(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}n<u?b():a.info({title:"Message",message:"We're sorry, but you've reached the end of search results."})}else a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(s){l(),a.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(s)}});
//# sourceMappingURL=index.js.map
