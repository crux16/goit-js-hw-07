import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from 'basiclightbox';




console.log(galleryItems);

const galleries = document.querySelector('.gallery');
const modal = document.querySelector('head');


galleries.insertAdjacentHTML('afterbegin', createGalleryItem(galleryItems));

/* function createItems(items){

    items.forEach((item) => {

        const image = document.createElement('img');
        const link = document.createElement('a');
        const list = document.createElement('li');

        image.classList.add('gallery__image');
        link.classList.add('gallery__item');
        link.classList.add('gallery__link');

        image.src = item.preview;

        image.alt = item.description;

        link.append(image);
        list.append(link);
        galleries.append(list);

    });
};

createItems(galleryItems); */

function createGalleryItem(element) {
    return element
        .map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`
        })
        .join('');
};

const zoomImage = (event) => {
        event.target.reset;

        const instance = basicLightbox.create(`
            <div class="modal">
                <p>
                    Your first lightbox with just a few lines of code.
                    Yes, it's really that simple.
                </p>
            </div>
        `)
        
        instance.show()
};

galleries.addEventListener('click', zoomImage);

