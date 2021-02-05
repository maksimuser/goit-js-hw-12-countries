import templatesCountries from '../templates/countries.hbs';
// import PNotify from '../js/notifications';
import clearMarkup from '../index';
import refs from '../js/refs';

import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyBrightTheme from 'pnotify/dist/PNotifyBrightTheme.css';

function updateCountriesMarkup(nameCountry) {
  if (nameCountry.length >= 2 && nameCountry.length <= 10) {
    const nameArr = nameCountry
      .map(el => {
        return `<li><h1>${el.name}</h1></li>`;
      })
      .join('');
    return refs.containerCountries.insertAdjacentHTML('beforeend', nameArr);
  } else if (nameCountry.length > 10) {
    PNotify.error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
    return clearMarkup();
  }

  const markup = templatesCountries(nameCountry);
  refs.containerCountries.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
