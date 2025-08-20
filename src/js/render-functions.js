import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { loader, galleryList, loadMoreBtn } from '../main';

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
          <a class="gallery-item-link" href="${largeImageURL}">
            <img class="gallery-item-img" src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="gallery-description-container">
            <div class="gallery-img-info">
              <h5>Likes</h5>
              <p>${likes}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Views</h5>
              <p>${views}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Comments</h5>
              <p>${comments}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Downloads</h5>
              <p>${downloads}</p>
            </div>
          </div>
        </li>`;
      }
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
