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
        <h2 className="text-center">BENVENUTO NEL NOSTRO CATALOGO FILM</h2>
        <p className="mt-4 mb-4">
          Benvenuti nel nostro catalogo di film, uno spazio pensato per chi ama il cinema in tutte le sue forme. Qui troverete una selezione curata di titoli che spaziano dai grandi classici
          intramontabili alle ultime uscite, passando per capolavori indipendenti e pellicole meno conosciute ma meritevoli di attenzione. Che siate appassionati di azione, commedie romantiche,
          thriller, drammi intensi o film d'animazione per tutta la famiglia, il nostro catalogo offre proposte adatte a ogni gusto e occasione. Ogni scheda include informazioni dettagliate,
          recensioni, valutazioni e suggerimenti per aiutarvi a scegliere il film perfetto per la vostra serata. Accendete il vostro schermo, preparate i popcorn e lasciatevi trasportare dalle storie,
          dalle emozioni e dai personaggi che solo il grande cinema sa regalare. Buona visione!
        </p>
        <Link className="btn btn-success" to={"/movies"}>
          Vedi i nostri film
        </Link>
      </section>
    </main>
  );
};

export default Home;
