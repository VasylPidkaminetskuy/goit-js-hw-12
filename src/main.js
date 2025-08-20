import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  hideLoader,
  renderGallery,
  showLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  buttonInput: document.querySelector('.js-button-search'),
  inputSearch: document.querySelector('.js-input-search'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-bt'),
};

export const {
  form,
  buttonInput,
  inputSearch,
  galleryList,
  loader,
  loadMoreBtn,
} = refs;

let page = 1;
let searchText = '';
let totalPages = 0;

document.addEventListener('DOMContentLoaded', () => {
  hideLoader();
  hideLoadMoreButton();
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;
  hideLoadMoreButton();

  const usersSearchValue = inputSearch.value.trim();

  if (!usersSearchValue) {
    iziToast.show({
      message: 'Please enter a search term before submitting.',
      position: 'topRight',
      backgroundColor: '#5c1e18',
      messageColor: '#bcbcbc',
    });
    return;
  }

  searchText = usersSearchValue;
  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(searchText, page);
    hideLoader();

    if (images.hits.length > 0) {
      totalPages = Math.ceil(images.totalHits / 15);
      renderGallery(images.hits);

      if (totalPages > 1) {
        showLoadMoreButton();
      } else {
        iziToast.info({
          title: 'Message',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    } else {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.error(error);
  } finally {
    form.reset();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const images = await getImagesByQuery(searchText, page);
    hideLoader();

    if (images.hits.length > 0) {
      renderGallery(images.hits);

      const galleryCard = document.querySelector('.gallery-item');
      if (galleryCard) {
        const { height: cardHeight } = galleryCard.getBoundingClientRect();
        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }

      if (page < totalPages) {
        showLoadMoreButton();
      } else {
        iziToast.info({
          title: 'Message',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    } else {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
    console.error(error);
  }
});
