export function fetchImages(query) {

  const API_KEY = '45097804-c04896a24774ae5ff52198fb8';
  const URL = 'https://pixabay.com/api/';

    return fetch(`${URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error('Fetching error:', error);
      throw error;
    });
  }
