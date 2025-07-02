import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMovie = () => {
  const navigate = useNavigate();

  const emptyMovie = {
    title: "",
    director: "",
    genre: "",
    abstract: "",
    image: null,
  };

  const [formData, setFormData] = useState(emptyMovie);

  const setFieldValue = (event) => {
    const { value, name } = event.target;
    
    if (name === "image") {
      const file = event.target.files[0];
      setFormData({
        ...formData,
        image: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFormChange = (event) => {
    event.preventDefault();
    const dataToSend = new FormData();
    // dataToSend.append("title", formData.title);
    // dataToSend.append("director", formData.director);
    // dataToSend.append("genre", formData.genre);
    // dataToSend.append("image", formData.image);
    // dataToSend.append("abstract", formData.abstract);
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }
    axios
      .post(`${import.meta.env.VITE_API_URL}/movies`, dataToSend, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((resp) => {
        const slug = resp.data.slug;
        navigate(`/movies/${slug}`);
      });
  };

  return (
    <main className="container py-5">
      <h1 className="text-center">Aggiungi un Film</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-xl-6">
          <form onSubmit={handleFormChange}>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">
                Titolo
              </label>
              <input className="form-control" type="text" id="title" name="title" value={formData.title} onChange={setFieldValue} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="director">
                Direttore
              </label>
              <input className="form-control" type="text" id="director" name="director" value={formData.director} onChange={setFieldValue} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="genre">
                Genere del Film
              </label>
              <input className="form-control" type="text" id="genre" name="genre" value={formData.genre} onChange={setFieldValue} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="image">
                Carica la copertina
              </label>
              <input className="form-control" type="file" id="image" name="image" onChange={setFieldValue} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="abstract">
                Descrizione del Film
              </label>
              <textarea className="form-control" name="abstract" id="abstract" value={formData.abstract} onChange={setFieldValue}></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Crea
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateMovie;
