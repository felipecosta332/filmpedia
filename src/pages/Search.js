import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const { data: films } = useFetch(apiPath, searchQuery);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {films.length === 0
            ? `No results found for '${searchQuery}'`
            : `Showing results for ${searchQuery}`}
        </p>
      </section>
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
