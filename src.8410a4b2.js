parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Y5dV":[function(require,module,exports) {

},{}],"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"q3lL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryItems=void 0;const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.galleryItems=p;
},{}],"ytcl":[function(require,module,exports) {
"use strict";function e({preview:e,original:l,description:r}){return` <li class = "gallery__item">\n  <a class = "gallery__link" href = ${l}>\n  <img class = "gallery__image" src = "${e}" data-source = "${l}" alt = "${r}" />\n  </a>\n  </li>`}Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryImgMarkup=e;
},{}],"C0iU":[function(require,module,exports) {
"use strict";var e=require("./gallery-cards"),t=require("./galleryImgMarkup");const r=document.querySelector("body"),n=document.querySelector(".js-gallery"),s=document.querySelector(".js-lightbox"),i=document.querySelector(".lightbox__overlay"),l=document.querySelector(".lightbox__image"),o=document.querySelector('[data-action="close-lightbox"]'),a=e.galleryItems.map(t.galleryImgMarkup).join("");function c(e){e.preventDefault(),e.target.classList.contains("gallery__image")&&(window.addEventListener("keydown",g),window.addEventListener("keydown",m),o.addEventListener("click",d),i.addEventListener("click",d),s.classList.add("is-open"),r.classList.add("is-open"),l.src=e.target.dataset.source,l.alt=e.target.alt)}function d(e){s.classList.contains("is-open")&&(s.classList.remove("is-open"),r.classList.remove("is-open"),l.src="",l.alt="",window.removeEventListener("keydown",m),window.removeEventListener("keydown",g),o.removeEventListener("click",d),i.removeEventListener("click",d))}function g(e){"Escape"===e.code&&d()}function m(t){if(!s.classList.contains("is-open"))return;let r=e.galleryItems.findIndex(e=>e.original===l.src);"ArrowLeft"===t.code&&(0===r&&(r+=e.galleryItems.length),r-=1),"ArrowRight"===t.code&&(r===e.galleryItems.length-1&&(r-=e.galleryItems.length),r+=1),l.src=e.galleryItems[r].original,l.alt=e.galleryItems[r].description}n.insertAdjacentHTML("afterbegin",a),n.addEventListener("click",c);
},{"./gallery-cards":"q3lL","./galleryImgMarkup":"ytcl"}],"Focm":[function(require,module,exports) {
"use strict";require("modern-normalize"),require("./sass/main.scss"),require("./partials/app");
},{"modern-normalize":"Y5dV","./sass/main.scss":"clu1","./partials/app":"C0iU"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.8410a4b2.js.map