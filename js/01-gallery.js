import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("afterbegin", createGallery(galleryItems));
galleryList.addEventListener("click", handlerClick);

function createGallery(arr) {
  return arr
    .map(
      ({ preview, description }, idx) => `
        <li class="gallery__item js-gallery__item" data-id="${idx}">
          <img class="gallery__image" src="${preview}" alt="${description}">
        </li>`
    )
    .join("");
}

function handlerClick(evt) {
  if (evt.currentTarget === evt.target) {
    return;
  }
  const currentPicture = evt.target.closest(".js-gallery__item");
  const pictureId = Number(currentPicture.dataset.id);
  const { original: pictureSrc, description: pictureText } =
    galleryItems[pictureId];

  const instance = basicLightbox.create(`
  	<img class="gallery__image" src="${pictureSrc}" alt="${pictureText}">
  `);
  instance.show();
}
