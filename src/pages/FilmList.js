import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const FilmList = ({ apiPath, title }) => {
  const { data: films } = useFetch(apiPath);

  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {films.map((film) => (
            <Card key={film.id} film={film} />
          ))}
        </div>
      </section>
    </main>
  );
};
