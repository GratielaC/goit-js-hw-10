import './css/styles.css';

import { getElement } from './jsFiles/getElement.js';
import _ from 'lodash';
import inputEventHandler from './jsFiles/inputEventHandler.js';

const DEBOUNCE_DELAY = 300;
export const searchInput = getElement('#search-box');
export const countryList = getElement('.country-list');
export const countryInfo = getElement('.country-info');



searchInput.addEventListener(
  'input',
  _.debounce(inputEventHandler, DEBOUNCE_DELAY)
);