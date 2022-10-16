import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryCards = document.querySelector('.gallery');


const galleryMarkup = createGalleryMarkup(galleryItems);
galleryCards.insertAdjacentHTML('beforeend', galleryMarkup);

galleryCards.addEventListener('click', onClickImage);



function createGalleryMarkup(galleryItems) {
    return galleryItems.map (({ preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
        </div>`
    }).join('');
}



function onClickImage (evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')){

        return
    };

    const instance = basicLightbox.create(`
    <img src="${evt.target.getAttribute('data-source')}" >`)

instance.show()


window.addEventListener('keydown', onEsckeyPress);
function onEsckeyPress (event) {
    

    if (event.code === 'Escape'){
       instance.close();
    }
}
}




