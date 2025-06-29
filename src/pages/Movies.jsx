import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((resp) => {
      setMovies(resp.data.data);
    });
  }, []);

  return (
    <>
      <main>
        <section className="container py-5">
          <h1 className="text-center">Movies</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {movies.map((curMovie) => (
              <div key={curMovie.id} className="col p-4">
                <MovieCard movie={curMovie}/>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Movies;
