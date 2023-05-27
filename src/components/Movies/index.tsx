import { memo, useMemo, useState, useEffect } from "react"
import style from "./style.module.scss"
import React from "react"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

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

function Movies() {
  // JS
  const { t } = useTranslation()

  const [movies, setMovies] = useState([])

  // Query쪽 처리
  const [searchParams] = useSearchParams()
  const detail = useMemo(() => searchParams.get("detail"), [searchParams])
  const sort = useMemo(() => searchParams.get("sort"), [searchParams])

  const url = useMemo(
    () =>
      sort === "rating"
        ? "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
        : sort === "title"
        ? "https://yts.mx/api/v2/list_movies.json?sort_by=title"
        : sort === "year"
        ? "https://yts.mx/api/v2/list_movies.json?sort_by=year"
        : "https://yts.mx/api/v2/list_movies.json",
    [sort]
  )

  const onDetail = useMemo(
    () => `/movies?${sort && `sort=${sort}`}&detail=true`,
    [sort]
  )
  const offDetail = useMemo(() => `/movies?${sort && `sort=${sort}`}`, [sort])

  useEffect(() => {
    // fetch("https://yts.mx/api/v2/list_movies.json")
    fetch(url)
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies))
  }, [url])

  const render = useMemo(
    () =>
      movies.map((item: MoviesItem) => {
        const movieRatingClass =
          item.rating >= 9
            ? "movieGood"
            : item.rating >= 7
            ? "movieSoso"
            : "movieBad"
        return (
          <div className={style.movie} key={item.id}>
            <div className={style.movieDetail}>
              <h2 className={style.movieTitle}>
                {item.title}
                {item.rating >= 8 && "🔥"}
              </h2>
              <div className={style[movieRatingClass]}>
                ({item.rating !== 0 ? item.rating : `(${t("movies:noRating")})`}
                /10)
              </div>
              <div className={style.movieYear}>{item.year}</div>
              <div className={style.movieGenre}> {item.genres.join(", ")} </div>

              {detail && (
                <>
                  <div>
                    <div>
                      {t("movies:title")} : {item.title_long}
                    </div>
                    <div>
                      {t("movies:runtime")} : {item.runtime}
                    </div>
                    <div>
                      {t("movies:story")} :{" "}
                      {item.summary !== ""
                        ? item.summary
                        : `(${t("movies:noStory")})`}
                    </div>
                  </div>
                </>
              )}

              {!detail ? (
                <Link to={onDetail}>세부정보 보기</Link>
              ) : (
                <Link to={offDetail}>세부정보 닫기</Link>
              )}
            </div>
            <img
              className={style.movieImage}
              src={item.large_cover_image}
              alt={item.title}
            />
          </div>
        )
      }),
    [detail, movies, offDetail, onDetail, t]
  )

  // XML
  return (
    <>
      <div>
        <span>정렬 : </span>
        <Link to="/movies?sort=rating">평점별</Link> /
        <Link to="/movies?sort=year">연도별</Link> /
        <Link to="/movies?sort=title">제목별</Link>
      </div>
      <div>{render}</div>
    </>
  )
}

export default memo(Movies)
