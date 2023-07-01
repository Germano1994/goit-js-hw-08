// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryMarkup = galleryItems.map(item => `
<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
</a>
</div>
`).join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a',{
    captionDelay: 250,
    captionsData: 'alt',
});

console.log(galleryItems);
  