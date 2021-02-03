import updateCountriesMarkup from './update-markup';

function fetchCountries(inputValue) {
  fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
    .then(res => res.json())
    .then(name => {
      console.log(name);
      updateCountriesMarkup(name);
    });
}

export default fetchCountries;
