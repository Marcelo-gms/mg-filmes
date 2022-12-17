// Hooks
import { useState, useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

// Api
import api from "../../services/api";

// styles
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const res = await api.get("movie/now_playing", {
        params: {
          api_key: "ced607e0f4a65cc45ad3e7566a209b27",
          language: "pt-BR",
          page: 1,
        },
      });

      setMovies(res.data.results);
      setLoading(false);
    };

    loadMovies();
  }, []);

  if (loading) {
    return <h2 className="loading">Carregando...</h2>;
  }

  return (
    <div className="home">
      <Banner movie={movies[8]} />
      {movies &&
        movies.map((movie) => (
          <div key={movie.id} className="movie">
            <h2>{movie.title}</h2>
            {movie.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />
            )}

            <Link to={`/filme/${movie.id}`}>Acessar</Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
