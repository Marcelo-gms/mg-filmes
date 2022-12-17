// Styles
import "./Favorites.css";

// Hooks
import { useEffect, useState } from "react";

// Components
import { Link } from "react-router-dom";
import {toast} from "react-toastify"

const Favorites = () => {
  const [moviesFavorites, setMoviesFavorites] = useState([]);

  useEffect(() => {
    setMoviesFavorites(JSON.parse(localStorage.getItem("Favorites")) || []);
  }, []);

  const handleDelete = (id) => {
    const filterMovies = moviesFavorites.filter((item) => item.id !== id);
    setMoviesFavorites(filterMovies);
    localStorage.setItem("Favorites", JSON.stringify(filterMovies));

    toast.success("Filme excluido com sucesso!")
  };

  return (
    <div className="favorites-container">
      <h1>Favoritos</h1>

      {moviesFavorites.length === 0 && (
        <p className="no-favorites">Você não tem filmes favoritos!</p>
      )}

      <ul className="list-favorites">
        {moviesFavorites &&
          moviesFavorites.map((favorites) => (
            <li className="item-list-favorites" key={favorites.id}>
              <span>{favorites.title}</span>
              <div className="item-links-container">
                <Link className="btn success" to={`/filme/${favorites.id}`}>
                  Detalhes
                </Link>
                <button
                  className="btn danger"
                  onClick={() => handleDelete(favorites.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Favorites;
