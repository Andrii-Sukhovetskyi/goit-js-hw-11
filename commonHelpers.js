import{S as f,i as d}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function u(i){return fetch(`https://pixabay.com/api/?key=45097804-c04896a24774ae5ff52198fb8&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r.hits).catch(r=>{throw console.error("Fetching error:",r),r})}const l=document.getElementById("loader"),a=document.getElementById("image-gallery"),m=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function h(i){if(!a)return;a.innerHTML="";const n=i.map(t=>`
      <div class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
          <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image"/>
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${t.likes}</p>
          <p class="info-item"><b>Views:</b> ${t.views}</p>
          <p class="info-item"><b>Comments:</b> ${t.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </div>
    `).join("");a.innerHTML=n,m.refresh()}function c(i){d.error({title:"Error",message:i,position:"topRight"})}function g(){l.style.display="block"}function p(){l.style.display="none"}const y=document.getElementById("search-form"),b=document.getElementById("search-input"),L=document.getElementById("image-gallery");y.addEventListener("submit",I);function I(i){i.preventDefault();const n=b.value.trim();if(n===""){c("Please enter a search term.");return}g(),u(n).then(t=>{t.length===0?(L.innerHTML="",c("Sorry, there are no images matching your search query. Please try again!")):h(t)}).catch(t=>{c("An error occurred while fetching images. Please try again later.")}).finally(()=>{p()})}
//# sourceMappingURL=commonHelpers.js.map
