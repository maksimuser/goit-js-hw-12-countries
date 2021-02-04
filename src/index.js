import fetchCountries from './js/fetchCountries';
// import './js/notifications';
import refs from './js/refs';

import './sass/styles.scss';

const debounce = require('lodash.debounce');

const debouncedInputCallback = debounce(() => {
  const searchQuery = refs.searchInput.value;
  refs.containerCountries.innerHTML = '';

  fetchCountries(searchQuery);
}, 500);

refs.searchInput.addEventListener('input', debouncedInputCallback);
