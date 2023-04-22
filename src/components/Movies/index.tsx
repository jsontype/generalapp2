import React from "react"
import { useState, useEffect } from "react"
import "./style.css"

type MoviesItem = {
  id: number
  title: string
  rating: number
  year: number
  genres: string[]
  title_long: string
  runtime: number
  summary: string
  large_cover_image: string
}

export default function Movies() {
  // JS
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetch("https://yts.mx/api/v2/list_movies.json")
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [])

  const render = movies.map((item: MoviesItem) => {
    return (
      <div className="movie" key={item.id}>
        <div className="movieDetail">
          <h2 className="movieTitle">
            {item.title}
            {item.rating >= 8 && "🔥"}
          </h2>
          <div
            className={
              item.rating >= 9
                ? "movieGood"
                : item.rating >= 7
                ? "movieSoso"
                : "movieBad"
            }
          >
            ({item.rating !== 0 ? item.rating : "(평점 없음)"}/10)
          </div>
          <div className="movieYear">{item.year}</div>
          <div className="movieGenre"> {item.genres.join(", ")} </div>
          <div>
            {" "}
            상세내용
            <div>타이틀 : {item.title_long}</div>
            <div>런타임 : {item.runtime}</div>
            <div>
              줄거리 : {item.summary !== "" ? item.summary : "(줄거리 없음)"}
            </div>
          </div>
        </div>
        <img
          className="movieImage"
          src={item.large_cover_image}
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
