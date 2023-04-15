import { useState, useEffect } from "react"
import "./style.css"

export default function Movies() {
  // JS
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetch("https://yts.mx/api/v2/list_movies.json")
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  const render = movies.map((item) => {
    return (
      <div className="movie" key={item.id}>
        <div className="movieDetail">
          <h2 className="movieTitle">{item.title}</h2>
        </div>
        <img
          className="movieImage"
          src={item.medium_cover_image}
          alt={item.title}
        />
      </div>
    )
  })

  // XML
  return (
    <>
      <div>{render}</div>
    </>
  )
}
