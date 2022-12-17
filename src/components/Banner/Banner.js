// Hooks
import { useEffect } from "react"

// styles
import "./Banner.css"

// Components
import { Link } from "react-router-dom"

const Banner = ({movie}) => {

  useEffect(()=> {
    console.log(movie)
  }, [movie])
  return (
    <div className="banner">
      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      <div className="banner-descrition">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>

        <Link to={`/filme/${movie.id}`} className="btn btn-banner">Detalhes</Link>
      </div>
    </div>
  )
}

export default Banner