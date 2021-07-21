import './css/styles.css';

import countryCardTpl from '../src/templates/country-card.hbs';
import countriesTpl from '../src/templates/countries.hbs';
import { fetchCountries } from './js/fetchCountries';
import getRefs from './js/get-refs';

import Notiflix from "notiflix";

const debounce = require('lodash.debounce');

const refs = getRefs();

const DEBOUNCE_DELAY = 300;

refs.inputSearch.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));



function onSearch(e) {
  e.preventDefault();

  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';

  const input = refs.inputSearch.value;

  console.log(input)

  if (input.trim() === '') {
    return Notiflix.Notify.failure('Please enter something');
  } else {

  fetchCountries(input)
    .then(renderCountryCard)
    .catch(error => console.log(error))
  }
}


function renderCountryCard(countries) {

  if (countries.length === 1) {
    const markup = countries[0];
    refs.countryInfo.insertAdjacentHTML('beforeend', countryCardTpl(markup));
  } 
  else if (countries.length > 10) {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
  } 
  else if (countries.status === 404) {
    Notiflix.Notify.failure('Oops, there is no country with that name');
  } 
  else if (countries.length >= 2 && countries.length <= 10) {
    const markupFewCountries = countriesTpl(countries)
    refs.countryList.insertAdjacentHTML('beforeend', markupFewCountries);
  }

}




