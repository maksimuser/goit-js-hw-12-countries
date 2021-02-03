import templatesCountries from '../templates/countries.hbs';
import refs from '../js/refs';

function updateCountriesMarkup(name) {
  const markup = templatesCountries(name);
  refs.containerCountries.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
