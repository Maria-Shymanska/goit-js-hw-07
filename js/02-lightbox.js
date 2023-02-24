import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainerUp = document.querySelector(".gallery");
const markupList = createGalleryMarkup(galleryItems);

galleryContainerUp.insertAdjacentHTML("afterbegin", markupList);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
            <a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
