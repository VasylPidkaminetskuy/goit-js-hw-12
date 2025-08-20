import axios from 'axios';

export function getImagesByQuery(query, page = 1) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51852329-0f9f7a5b812c170a88122fd74',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 15,
      },
    })
    .then(res => res.data)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}