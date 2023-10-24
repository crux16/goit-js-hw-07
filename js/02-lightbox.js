import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector('ul.gallery');
const photosMarkup = createGalleryItem(galleryItems);


galleryUl.insertAdjacentHTML('beforeend',photosMarkup);

function createGalleryItem(element) {
    return element
    .map(({ preview, original, description}) => {
        return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');
};

 const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 500, // add 250ms after opening animation speed
    // close: false,
    // showCounter: false,
    animationSpeed: 250, //animation speed 250ms
    hashReseted: false,
 });
