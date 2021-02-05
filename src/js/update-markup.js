import templatesCountries from '../templates/countries.hbs';
import PNotify from '../js/notifications';
import clearMarkup from '../index';
import refs from '../js/refs';

function updateCountriesMarkup(nameCountry) {
  if (!nameCountry.length) {
    PNotify.error({
      title: 'Incorrect request!',
      text: 'Check if the country name is entered correctly',
      delay: 2000,
    });
    return clearMarkup();
  } else if (nameCountry.length > 10) {
    PNotify.error({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 2000,
    });
    return clearMarkup();
  } else if (nameCountry.length >= 2 && nameCountry.length <= 10) {
    const listName = nameCountry
      .map(el => {
        return `<li><h1>${el.name}</h1></li>`;
      })
      .join('');

    return refs.containerCountries.insertAdjacentHTML('beforeend', listName);
  }

  const markup = templatesCountries(nameCountry);
  refs.containerCountries.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
