import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      const APIKey = "476f7930f8c9d29bf755d06bb62e6dae";
      const APIRequest =
        "https://api.themoviedb.org/3/movie/now_playing?api_key=";
      const response = await fetch(`${APIRequest}${APIKey}`);
      const data = await response.json();
      setFilms(data.results);
    }
    fetchFilms();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {films.map((film) => (
            <Card key={film.id} film={film} />
          ))}
        </div>
      </section>
    </main>
  );
};
