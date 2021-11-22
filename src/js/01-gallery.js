// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const timeCaption = 250;
const galleryContainerRef = document.querySelector(".gallery");

const newElements = galleryItems.map(({ preview, original, description }) => `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join(' ');

galleryContainerRef.innerHTML = newElements;

let modal = new SimpleLightbox('.gallery__item');

modal.defaultOptions.captionsData = "alt";
modal.defaultOptions.captionDelay = timeCaption;