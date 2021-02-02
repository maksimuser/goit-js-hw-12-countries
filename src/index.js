import './styles.css';
import templatesCountries from './templates/countries.hbs';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  containerCountries: document.querySelector('.js-countries'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = refs.searchForm;
  const inputValue = form.elements.query.value;

  fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
    .then(res => res.json())
    .then(name => {
      console.log(name);
      const markup = templatesCountries(name);

      refs.containerCountries.insertAdjacentHTML('beforeend', markup);
    });
});
