import fetchCountries from './js/fetchCountries';
import './js/notifications';
import refs from './js/refs';

import './sass/styles.scss';

const debounce = require('lodash.debounce');

const debouncedInputCallback = debounce(() => {
  const inputValue = refs.searchInput.value;
  refs.containerCountries.innerHTML = '';

  fetchCountries(inputValue);
}, 500);

refs.searchInput.addEventListener('input', debouncedInputCallback);
