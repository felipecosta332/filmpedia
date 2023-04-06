import { Routes, Route } from "react-router-dom";
import { FilmList, FilmDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<FilmList apiPath="movie/now_playing" />} />
        <Route path="film/:id" element={<FilmDetail />} />
        <Route
          path="films/popular"
          element={<FilmList apiPath="movie/popular" />}
        />
        <Route
          path="films/top"
          element={<FilmList apiPath="movie/top_rated" />}
        />
        <Route
          path="films/upcoming"
          element={<FilmList apiPath="movie/upcoming" />}
        />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
