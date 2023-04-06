import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const FilmList = ({ apiPath }) => {
  const { data: films } = useFetch(apiPath);

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
