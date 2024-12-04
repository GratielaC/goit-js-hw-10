// catFinderIndex.js
import { fetchBreeds } from './jsFiles/catFinder/cat-api.js';


const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorElement = document.querySelector('.error');

function populateBreedSelect(breeds) {
  breedSelect.innerHTML = breeds
    .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
    .join('');
}

function loadBreeds() {
  loader.classList.remove('hidden'); // Show loader
  errorElement.classList.add('hidden'); // Hide error message

  fetchBreeds()
    .then(breeds => {
      populateBreedSelect(breeds);
      breedSelect.classList.remove('hidden'); // Show dropdown
    })
    .catch(() => {
      errorElement.classList.remove('hidden'); // Show error message
    })
    .finally(() => {
      loader.classList.add('hidden'); // Hide loader
    });
}

document.addEventListener('DOMContentLoaded', loadBreeds);
