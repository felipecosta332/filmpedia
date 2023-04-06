import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/images/backup.png";

export const FilmDetail = () => {
  const params = useParams();
  const [film, setFilm] = useState([]);
  const image = film.poster_path
    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
    : Backup;

  useEffect(() => {
    async function fetchFilm() {
      const API_BASE_URL = "https://api.themoviedb.org/3/";
      const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
      const API_PATH = `movie/${params.id}`;
      const url = `${API_BASE_URL}${API_PATH}?api_key=${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();
      setFilm(json);
    }
    fetchFilm();
  }, []);

  const formatCurrencyValue = (value) => {
    const billion = 1000000000;
    const million = 1000000;
    if (value >= billion) {
      let result = value / billion;
      return `$${
        Number.isInteger(result) ? result : result.toFixed(3)
      } billion`;
    } else if (value >= million) {
      let result = value / million;
      return `$${Math.round(result)} million`;
    } else {
      return `$${value}`;
    }
  };

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={film.title} />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {film.title}
          </h1>
          <p className="my-4">{film.overview}</p>

          {film.genres ? (
            <p className="my-7 flex flex-wrap gap-2">
              {film.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-gray-900 dark:text-white">
              {film.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {film.vote_count} reviews
            </span>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{film.runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{formatCurrencyValue(film.budget)}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{formatCurrencyValue(film.revenue)}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{film.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <span>{film.imdb_id}</span>
            <a
              className="mx-2 text-blue-700  hover:text-blue-500"
              href={`https://www.imdb.com/title/${film.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              (<span className="underline">IMDB link</span>)
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
