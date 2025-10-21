import axios from 'axios';

const API_KEY = '52841982-f1748b7cc828c4a83b5032abb';
const BASE_URL = 'https://pixabay.com/api/';
// export function getImagesByQuery(query) {
//   const params = {
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   };

//   return axios
//     .get(BASE_URL, { params })
//     .then(response => {
//       return response.data.hits;
//     })
//     .catch(error => {
//       console.error('Error fetching images from Pixabay:', error);
//       throw new Error('Failed to fetch images from Pixabay.');
//     });
// }
// js/pixabay-api.js (Використовуючи Fetch API)

// ... константи ...

export function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${searchParams}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        // Кидаємо помилку, якщо статус 4xx/5xx
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data.hits; // Повертаємо масив зображень
    })

    .catch(error => {
      console.error('Error fetching images:', error);
      throw new Error('Failed to fetch images from Pixabay using Fetch API.');
    });
}
