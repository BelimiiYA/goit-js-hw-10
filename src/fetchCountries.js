export const fetchCountries = name =>
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!responce.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
