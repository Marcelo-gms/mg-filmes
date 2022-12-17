import { Link } from "react-router-dom";

// styles 

import "./Erro.css"

const Error = () => {
  return (
    <div className="erro">
      <h1>404</h1>
      <h2>Pagina não encontrada 😢 </h2>

      <Link to="/" className="btn">
        Ver todos os filmes
      </Link>
    </div>
  );
};

export default Error;
