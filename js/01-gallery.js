// 1.Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.
// 2.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 3.Реалізація делегування на div.gallery і отримання url великого зображення.
// 4.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 5.Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 6.Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainerUp = document.querySelector(".gallery");
const markupList = createGalleryMark(galleryItems);

galleryContainerUp.insertAdjacentHTML("afterbegin", markupList);
galleryContainerUp.addEventListener("click", onGalleryItemsClick);

function createGalleryMark(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>
`;
    })
    .join("");
}

let instance;

function onGalleryItemsClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShowUp,
    }
  );

  instance.show();
}

function onShowUp() {
  window.addEventListener("keydown", onEscPress);
}

function onCloseUp() {
  window.removeEventListener("keydown", onEscPress);
}

function onEscPress(evt) {
  if (evt.code === "Escape") {
    instance.close();
    onCloseUp();
  }
}
