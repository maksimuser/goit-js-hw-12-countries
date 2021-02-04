import templatesCountries from '../templates/countries.hbs';
import refs from '../js/refs';

function updateCountriesMarkup(nameCountry) {
  if (nameCountry.length >= 2 && nameCountry.length <= 10) {
    const nameArr = nameCountry
      .map(el => {
        return `<li><h1>${el.name}</h1></li>`;
      })
      .join('');
    return refs.containerCountries.insertAdjacentHTML('beforeend', nameArr);
  }

  const markup = templatesCountries(nameCountry);
  refs.containerCountries.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
