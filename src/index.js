import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import './sass/styles.scss';

const debounce = require('lodash.debounce');

const debouncedInputCallback = debounce(() => {
  const searchQuery = refs.searchInput.value;

  clearMarkup();

  fetchCountries(searchQuery);
}, 500);

refs.searchInput.addEventListener('input', debouncedInputCallback);

export default function clearMarkup() {
  refs.containerCountries.innerHTML = '';
}
