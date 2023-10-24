import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');


const createGalleryItem = (element) => {
    return element
    .map(({ preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="l${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}

const photosMarkup = createGalleryItem(galleryItems);

const galleryHandler = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const originalURL = event.target.dataset.source;
    const newAltText = event.target.alt;
    const showIMG = basicLightbox.create(`<img src="${originalURL}" alt="${newAltText}" />`);
    showIMG.show();

    window.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(event) {
        const ESC_KEY_CODE = 'Escape';
        if (event.code === ESC_KEY_CODE) {
            showIMG.close();
        }
    }
};  

galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);
galleryContainer.addEventListener('click', galleryHandler);