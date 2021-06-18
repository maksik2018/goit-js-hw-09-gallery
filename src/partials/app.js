import { galleryItems } from './gallery-cards';
import { galleryImgMarkup } from './galleryImgMarkup';
// import {modalCloseByEscape} from './modalCloseByEscape';

const bodyEl = document.querySelector('body');
const galleryContainer = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const overlay = document.querySelector('.lightbox__overlay');
const modalImg = document.querySelector('.lightbox__image');
const modalBtnClose = document.querySelector('[data-action="close-lightbox"]');


// function galleryImgMarkup ({ preview, original, description }) {
//   return ` <li class = "gallery__item">
//   <a class = "gallery__link" href = ${original}>
//   <img class = "gallery__image" src = "${preview}" data-source = "${original}" alt = "${description}" />
//   </a>
//   </li>`;

// };

const pictures = galleryItems.map(galleryImgMarkup).join('');
// console.log(pictures);

galleryContainer.insertAdjacentHTML('afterbegin', pictures);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();

  const isGalleryImg = event.target.classList.contains('gallery__image');
  if (!isGalleryImg) {
    return;
  }
  window.addEventListener('keydown', modalCloseByEscape);
  window.addEventListener('keydown', onLeftRightArrow);
  modalBtnClose.addEventListener("click", modalClose);
  overlay.addEventListener('click', modalClose);
  modal.classList.add("is-open");
  bodyEl.classList.add('is-open');//убирает скролл при открытой модалке
  modalImg.src = event.target.dataset.source;
  // console.log(modalImg.src);
  modalImg.alt = event.target.alt;
  // console.log(modalImg.alt);
  
 
};

// modalBtnClose.addEventListener("click", modalClose);
// overlay.addEventListener('click', modalClose);
// window.addEventListener('keydown', modalCloseByEscape);
// window.addEventListener('keydown', onLeftRightArrow);


function modalClose(event) {
  const isModalOpen = modal.classList.contains("is-open");//проверка открыто ли модальное окно
  if (!isModalOpen) {
    return;
  }
  modal.classList.remove("is-open");
  bodyEl.classList.remove('is-open');//добавляет скролл при закрытой модалке
  modalImg.src = "";
  modalImg.alt = "";
  window.removeEventListener('keydown', onLeftRightArrow);
  window.removeEventListener('keydown', modalCloseByEscape);
  modalBtnClose.removeEventListener("click", modalClose);
  overlay.removeEventListener('click', modalClose);
  
  
  };

function modalCloseByEscape(event) {
  if (event.code === "Escape") {
    modalClose();
    
    }
};

function onLeftRightArrow(event) {
  const isModalOpen = modal.classList.contains("is-open");//проверка открыто ли модальное окно
  if (!isModalOpen) {
    return;
  }
//находим индекс картинки
    let imgIndex = galleryItems.findIndex(img => img.original === modalImg.src);
  
//Пролистывание изображений галереи в открытом модальном окне клавишей "влево".
    if (event.code === 'ArrowLeft') {
        if (imgIndex === 0) {
            imgIndex += galleryItems.length;
        }
        imgIndex -= 1;
    };
//Пролистывание изображений галереи в открытом модальном окне клавишей "вправо".
    if (event.code === 'ArrowRight' ) {
        if (imgIndex === galleryItems.length - 1) {
            imgIndex -= galleryItems.length;
        }
        imgIndex += 1;
    };

    modalImg.src = galleryItems[imgIndex].original;
  modalImg.alt = galleryItems[imgIndex].description;
  

};



//перелистывание через цикл - но картинки не листаются постоянно, а останавливаются на первой и последней
//   if (event.code === "ArrowRight") {

//     for (let i = 0; i < galleryItems.length; i++) {
//       if (modalImg.src === galleryItems[i].original) {
//         modalImg.src = galleryItems[(i += 1)].original
//       }
//     }
//   }

//     if (event.code === "ArrowLeft") {

//       for (let i = 0; i < galleryItems.length; i++) {
//         if (modalImg.src === galleryItems[i].original) {
//           modalImg.src = galleryItems[(i-=1)].original
//         }
      
//       }
//       }
// };