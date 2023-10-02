import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = createGallery(galleryItems);

function createGallery(arr) {
  return arr
    .map(
      ({ original, preview, description }, idx) => `
      <li class="gallery__item" data-id="${idx}">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}">
        </a>
      </li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
