import{a as q,S as M,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function f(s,r=1){return q.get("https://pixabay.com/api/",{params:{key:"51852329-0f9f7a5b812c170a88122fd74",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:15}}).then(t=>t.data).catch(t=>{throw console.error("Error fetching images:",t),t})}let P=new M(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function y(s){const r=s.map(({webformatURL:t,largeImageURL:c,tags:e,likes:o,views:i,comments:S,downloads:w})=>`<li class="gallery-item">
          <a class="gallery-item-link" href="${c}">
            <img class="gallery-item-img" src="${t}" alt="${e}" />
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
              <p>${S}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Downloads</h5>
              <p>${w}</p>
            </div>
          </div>
        </li>`).join("");L.insertAdjacentHTML("beforeend",r),P.refresh()}function E(){L.innerHTML=""}function p(){v.classList.remove("hidden")}function l(){v.classList.add("hidden")}function b(){h.classList.remove("hidden")}function g(){h.classList.add("hidden")}const B={form:document.querySelector(".form"),buttonInput:document.querySelector(".js-button-search"),inputSearch:document.querySelector(".js-input-search"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-bt")},{form:m,buttonInput:j,inputSearch:O,galleryList:L,loader:v,loadMoreBtn:h}=B;let n=1,d="",u=0;document.addEventListener("DOMContentLoaded",()=>{l(),g()});m.addEventListener("submit",async s=>{s.preventDefault(),n=1,g();const r=O.value.trim();if(!r){a.show({message:"Please enter a search term before submitting.",position:"topRight",backgroundColor:"#5c1e18",messageColor:"#bcbcbc"});return}d=r,E(),p();try{const t=await f(d,n);l(),t.hits.length>0?(u=Math.ceil(t.totalHits/15),y(t.hits),u>1?b():a.info({title:"Message",message:"We're sorry, but you've reached the end of search results."})):a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(t){l(),a.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(t)}finally{m.reset()}});h.addEventListener("click",async()=>{n+=1,g(),p();try{const s=await f(d,n);if(l(),s.hits.length>0){y(s.hits);const r=document.querySelector(".gallery-item");if(r){const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}n<u?b():a.info({title:"Message",message:"We're sorry, but you've reached the end of search results."})}else a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(s){l(),a.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(s)}});
//# sourceMappingURL=index.js.map
