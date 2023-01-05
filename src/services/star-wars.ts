const STARWARS_API_URL = 'https://swapi.dev/api';

export const searchPeople = (query: string) => {
  const URL = `${STARWARS_API_URL}/people?${new URLSearchParams({
    search: query,
  })}`;
  return fetch(URL);
};
