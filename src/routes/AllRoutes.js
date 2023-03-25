import { Routes, Route } from "react-router-dom";
import { FilmList, FilmDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FilmList />} />
        <Route path="film/:id" element={<FilmDetail />} />
        <Route path="films/popular" element={<FilmList />} />
        <Route path="films/top" element={<FilmList />} />
        <Route path="films/upcoming" element={<FilmList />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
