import{S as d,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const m="52841982-f1748b7cc828c4a83b5032abb",h="https://pixabay.com/api/";function p(e){const t=new URLSearchParams({key:m,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${h}?${t}`;return fetch(s).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>n.hits).catch(n=>{throw console.error("Error fetching images:",n),new Error("Failed to fetch images from Pixabay using Fetch API.")})}const i=document.querySelector(".gallery"),a=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(e){const t=e.tags.split(",").slice(0,3).join(",");return`
  <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}" 
    data-alt="${t}">  
        <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${t}"
            width="360"
            />
        <div class="info">
            <p class="info-item"><b>Likes</b> ${e.likes}</p>
            <p class="info-item"><b>Views</b> ${e.views}</p>
            <p class="info-item"><b>Comments</b> ${e.comments}</p>
            <p class="info-item"><b>Downloads</b> ${e.downloads}</p>
        </div>
    </a>
    </li>`}function b(e){if(!i){console.error("Gallery container not found in DOM!");return}const t=e.map(y).join("");i.insertAdjacentHTML("beforeend",t),g.refresh()}function L(){i&&(i.innerHTML="")}function w(){a&&a.classList.remove("is-hidden")}function u(){a&&a.classList.add("is-hidden")}const f=document.querySelector(".form");f.addEventListener("submit",E);function E(e){e.preventDefault();const t=e.currentTarget.elements["search-text"].value.toLowerCase().trim();if(t===""){l.error({title:"Error",message:"Enter a search term",position:"topRight"});return}L(),w(),p(t).then(s=>{u(),s.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(b(s),console.log("Images found:",s.length))}).catch(s=>{u(),l.error({title:"Error",message:"Failed to fetch images. Please check your network connection.",position:"topRight"}),console.error("Error:",s.message)}).finally(()=>{f.reset()})}
//# sourceMappingURL=index.js.map
