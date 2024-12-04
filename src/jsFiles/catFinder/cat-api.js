// cat-api.js
import axios from 'axios';

// Replace 'your_key' with your actual API key from The Cat API
axios.defaults.headers.common['x-api-key'] = 'live_yyt921ibZYoALyxNkRNjFjEZAaEZmc8IbLIPjqKyPyABlK3qvZVyozRR4YZH7kvDy';

// cat-api.js

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error; // Re-throw the error for further handling
    });
}

