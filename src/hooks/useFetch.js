import { useState, useEffect } from "react";

export const useFetch = (apiPath, searchQuery = "") => {
  const [data, setData] = useState([]);
  const API_BASE_URL = "https://api.themoviedb.org/3/";
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const url = `${API_BASE_URL}${apiPath}?api_key=${API_KEY}&query=${searchQuery}`;

  useEffect(() => {
    async function fetchFilms() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchFilms();
  }, [url]);

  return { data };
};
