// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox/dist/simple-lightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const collection = document.querySelector('.gallery');

const listItems = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
).join('');

collection.insertAdjacentHTML('afterbegin', listItems);

collection.addEventListener('click', (event) => {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const largeImageUrl = event.target.dataset.source;
  const lightbox = SimpleLightbox.create(`<img src="${largeImageUrl}" />`).show();

});
  