import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../services/api";

// styles
import "./Filme.css";

// Components
import { toast } from "react-toastify";

const Filme = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovie = async () => {
      
      const res = await api
        .get(`movie/${id}`, {
          params: {
            api_key: "ced607e0f4a65cc45ad3e7566a209b27",
            language: "pt-BR",
          },
        })
        .then((res) => setMovie(res.data))
        .catch(() => navigate("/", { replace: true }));
    };

    loadMovie();
    setLoading(false);

    return () => console.log("Componente desmontado!");
  }, [id, navigate]);

  const saveMovie = () => {
    const myList = localStorage.getItem("Favorites");

    let moviesfavorites = JSON.parse(myList) || [];

    const hasMovie = moviesfavorites.some(
      (savedMovie) => savedMovie.id === movie.id
    );

    if (hasMovie) {
      return toast.warn("Este filme já está salvo!");
    }

    moviesfavorites.push(movie);

    localStorage.setItem("Favorites", JSON.stringify(moviesfavorites));
    toast.success("Filme salvo com sucesso!");
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container-movie">
      <div className="container-description">
        <h1>{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />

        <h2>Descrição:</h2>
        <p>{movie.overview}</p>
        <h2>Linguagem original:</h2>
        <p>{movie.original_language}</p>
        <h2>Duração:</h2>
        <p>{movie.runtime} Minutos</p>
        <h2>Lançado em:</h2>
        <p>{movie.release_date}</p>

        <div className="container-buttons">
          <button className="btn success" onClick={saveMovie}>
            salvar
          </button>
          <a
            href={`http://youtube.com/results?search_query=${movie.title} trailer`}
            target="blank"
            rel="external"
          >
            <button className="btn success">Ver trailer</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Filme;
