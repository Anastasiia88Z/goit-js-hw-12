import '../css/styles.css'

fetch('https://restcountries.eu/rest/v2')
   .then(response => {
     return response.json();
   });

    