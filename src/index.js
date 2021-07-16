import './css/styles.css';

import countryCardTpl from '../src/templates/country-card.hbs';

const refs = {
  countryInfo: document.querySelector('.country-info'),
}

function renderCountryInfo(country) {
  const markup = countryCardTpl(country);
  refs.countryInfo.innerHTML = markup;
}

const DEBOUNCE_DELAY = 300;

