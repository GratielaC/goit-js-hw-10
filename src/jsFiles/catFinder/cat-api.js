import {
  breedSelect,
  loader,
  catInfo,
  breedSelectContainer,
} from '../../catFinderIndex';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';

const API_KEY = 'live_yyt921ibZYoALyxNkRNjFjEZAaEZmc8IbLIPjqKyPyABlK3qvZVyozRR4YZH7kvD';
const BASE_URL = 'https://api.thecatapi.com/v1';

export const getCatsBreeds = () => {
  return fetch(`${BASE_URL}/breeds`, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(resp => resp.json())
    .then(resp => {
      const arrayOfBreeds = getOnlyTheBreeds(resp);
      breedSelect.innerHTML = addToBreedSelect(arrayOfBreeds);
      breedSelect.classList.remove('hide');
      loader.classList.add('hide');
      new SlimSelect({
        select: breedSelect,
      });
    })
    .catch(err => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      loader.classList.add('hide');
      console.log(err);
    });
};

function getOnlyTheBreeds(array) {
  return array.map(cat => {
    return { id: cat.id, name: cat.name };
  });
}

function addToBreedSelect(array) {
  return array
    .map(cat => `<option value="${cat.id}">${cat.name}</option>`)
    .join('');
}

const makeCatInfo = (image, moreInfo) => {
  return `
    <img src="${image}" alt="${moreInfo.name}" class="cat-img" />
    <div class="description-text">
      <h2 class="breed-name">${moreInfo.name}</h2>
      <p class="cat-description">${moreInfo.description}</p>
      <p class="temperament"><span>Temperament:</span> ${moreInfo.temperament}</p>
    </div>`;
};

export const fetchCatByBreed = url => {
  return fetch(url, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(resp => resp.json())
    .then(resp => {
      const catSelect = resp[0];
      let { url: image, breeds: moreInfo } = catSelect;
      moreInfo = moreInfo[0];
      loader.classList.add('hide');
      catInfo.innerHTML = makeCatInfo(image, moreInfo);
      breedSelectContainer.classList.remove('hide');
    })
    .catch(err => {
      loader.classList.add('hide');
      breedSelectContainer.classList.remove('hide');
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Please choose another cat!'
      );
      console.log(err);
    });
};
