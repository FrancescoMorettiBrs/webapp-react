import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios, { formToJSON } from "axios";
import ReviewCard from "../components/ReviewCard";
import RenderStars from "../components/RenederStars";
import ReviewForm from "../components/ReviewForm";

const SingleMovie = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = () => {
    axios
      .get(`http://localhost:3000/movies/${slug}`)
      .then((resp) => {
        setMovie(resp.data.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/not-found");
        }
      });
  };

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
            <h1>{movie.title} </h1>
            <h3>{movie.director}</h3>
            <div>
              <RenderStars vote={movie.vote_avg} />
            </div>
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
            <hr className="mt-5" />
          </section>
          <section className="py-5 container">
            <h2 className="text-center mb-4">Lascia una recensione!</h2>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6 col-xl-4">
                <div className="card">
                  <ReviewForm movie_id={movie.id} reloadReviews={getMovieDetails} />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default SingleMovie;
