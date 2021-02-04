import updateCountriesMarkup from './update-markup';

function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .then(nameCountry => {
      updateCountriesMarkup(nameCountry);
    });
}

export default fetchCountries;
