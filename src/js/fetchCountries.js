// Напиши функцию fetchCountries(name) которая делает HTTP-запрос и возвращает промис с массивом стран - 
// результатом запроса. Вынеси её в отдельный файл fetchCountries.js и сделай именованный экспорт.

const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(name) {
   return fetch(`${BASE_URL}/name/${name}`).then((response) => 
    response.json()
      );
}

export default { fetchCountries };