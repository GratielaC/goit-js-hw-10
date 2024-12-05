// imports
import { getCatsBreeds, fetchCatByBreed } from './jsFiles/catFinder/cat-api.js';
import { getElement } from './jsFiles/getElement.js';

// variabiles

export const breedSelect = getElement('.breed-select');
export const loader = getElement('.loader-container');
export const catInfo = getElement('.cat-info');
export const breedSelectContainer = getElement('.breed-select-container');

const showBreedInfo = e => {
  const catId = e.target.value;
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${catId}&api_key=live_yyt921ibZYoALyxNkRNjFjEZAaEZmc8IbLIPjqKyPyABlK3qvZVyozRR4YZH7kvD`;
  breedSelectContainer.classList.add('hide');
  loader.classList.remove('hide');
  catInfo.innerHTML = '';
  fetchCatByBreed(url);
};

window.addEventListener('DOMContentLoaded', getCatsBreeds);
breedSelect.addEventListener('change', showBreedInfo);