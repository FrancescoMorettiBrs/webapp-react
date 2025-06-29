const MovieCard = ({ movie }) => {
    const {id, title, genre, abstract, director, image} = movie
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top h-100" alt={`Immagine di ${title}`}/>
      <div className="card-body">
        <h4 className="card-title">{director} - {title}</h4>
        <h5>{genre}</h5>
        <p className="card-text">{abstract}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
