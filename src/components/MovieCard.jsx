import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { id, title, genre, abstract, director, image } = movie;
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top h-100" alt={`Immagine di ${title}`} />
      <div className="card-body">
        <h4 className="card-title">
          {title} - {director}
        </h4>
        <h5>{genre}</h5>
        <p className="card-text">{abstract}</p>
        <Link to={`/movies/${id}`} className="btn btn-success">
          Vedi i dettagli
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
