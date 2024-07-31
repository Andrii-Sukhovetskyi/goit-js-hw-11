import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const loadingIndicator = document.getElementById('loader');
const gallery = document.getElementById('image-gallery');

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250
});

export function renderImages(images) {
  if (!gallery) {
    return;
   }
  gallery.innerHTML = '';

 const imageItems = images.map(image => `
      <div class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image"/>
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${image.likes}</p>
          <p class="info-item"><b>Views:</b> ${image.views}</p>
          <p class="info-item"><b>Comments:</b> ${image.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </div>
    `).join('');
  
  gallery.innerHTML = imageItems;

    lightbox.refresh();
}

export function showError(errorMessage) {
  iziToast.error({
    title: 'Error',
    message: errorMessage,
    position: 'topRight'
  });
}

export function showLoading() {
    loadingIndicator.style.display = 'block';
}

export function hideLoading() {
    loadingIndicator.style.display = 'none';
}
