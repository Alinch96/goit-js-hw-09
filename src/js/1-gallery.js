import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './images-data.js';


const ulEl = document.querySelector('ul');

const createGalleryTemplate = (array) =>
    array.reduce((accumulator, { preview, original, description }) =>
        accumulator +
        `<li class="gallery-item">
            <a class="gallery-link" href="${original}">
                <img
                    class="gallery-image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    title ="${description}"
                />
            </a>
        </li>`
        , '');


ulEl.innerHTML = createGalleryTemplate(images);

const simp = new SimpleLightbox('.gallery a', {
  captionDelay: 250
});


