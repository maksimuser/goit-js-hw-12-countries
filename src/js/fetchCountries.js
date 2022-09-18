import updateCountriesMarkup from './update-markup';

function fetchCountries(searchQuery) {
  const baseUrl = 'https://restcountries.com/v2';
  fetch(`${baseUrl}/name/${searchQuery}`)
    .then(res => res.json())
    .then(nameCountry => updateCountriesMarkup(nameCountry))
    .catch(err => console.log(err));
}

export default fetchCountries;
