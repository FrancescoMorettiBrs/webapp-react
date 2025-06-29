import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/movie-trendy-banner-vector.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="container py-5">
        <h2 className="text-center">Dai un occhiata ai nostri Film</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, necessitatibus. Amet sed alias, a voluptatem doloribus consequuntur dolor sunt ullam assumenda? Quibusdam praesentium quas
          beatae quaerat temporibus rem provident at! Doloremque officiis, fugiat fuga possimus facilis nulla, quisquam autem iure veniam sit id voluptates ipsum soluta ut. Beatae mollitia eos
          repellendus, reprehenderit quod fugiat quo incidunt fuga. Consequatur, facere nisi.
        </p>
        <Link className="btn btn-success" to={"/movies"}>
          Vedi i nostri film
        </Link>
      </section>
    </main>
  );
};

export default Home;
