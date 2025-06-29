import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`).then((resp) => {
      setMovie(resp.data.data);
    });
  }, []);

  const goBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <main>
      {movie && movie.image && (
        <section>
          <img className="banner" src={movie.image} alt="" />
        </section>
      )}
      {movie && (
        <>
          <section className="container py-4 text-center">
            <h1>
              {movie.title} - {movie.director}
            </h1>
            <div>{movie.vote_avg}</div>
            <p>{movie.abstract}</p>
            <section>
              <h2>Recensioni</h2>
              {movie.reviews.length === 0 ? (
                <div className="alert alert-info">Momentaneamente non ci sono recensioni</div>
              ) : (
                <div className="row row-clos-1 g-4">
                  {movie.reviews.map((curReview) => (
                    <div className="col" key={curReview.id}>
                      <ReviewCard review={curReview} />
                    </div>
                  ))}
                </div>
              )}
            </section>
            <div className="mt-4">
              <a className="btn btn-outline-success" onClick={goBack}>
                Indietro
              </a>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default SingleMovie;
