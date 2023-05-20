import { useState, useEffect } from "react";
import style from "./style.module.scss";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

type MoviesItem = {
  id: number;
  title: string;
  rating: number;
  year: number;
  genres: string[];
  title_long: string;
  runtime: number;
  summary: string;
  large_cover_image: string;
};

export default function Movies() {
  // JS
  const [movies, setMovies] = useState([]);

  //Query쪽 처리
  const [searchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const sort = searchParams.get("sort");

  const url =
    sort === "rating"
      ? "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      : sort === "title"
      ? "https://yts.mx/api/v2/list_movies.json?sort_by=title"
      : sort === "year"
      ? "https://yts.mx/api/v2/list_movies.json?sort_by=year"
      : "https://yts.mx/api/v2/list_movies.json";

  const onDetail = `/movies?${sort && `sort=${sort}`}&detail=true`;
  const offDetail = `/movies?${sort && `sort=${sort}`}`;

  useEffect(() => {
    //fetch("https://yts.mx/api/v2/list_movies.json")
    fetch(url)
      .then((res) => res.json())
      .then((json) => setMovies(json.data.movies));
  }, [url]);

  const render = movies.map((item: MoviesItem) => {
    const movieRatingClass =
      item.rating >= 9
        ? "movieGood"
        : item.rating >= 7
        ? "movieSoso"
        : "movieBad";
    return (
      <div className={style.movie} key={item.id}>
        <div className={style.movieDetail}>
          <h2 className={style.movieTitle}>
            {item.title}
            {item.rating >= 8 && "🔥"}
          </h2>
          <div className={style[movieRatingClass]}>
            ({item.rating !== 0 ? item.rating : "(평점 없음)"}/10)
          </div>
          <div className={style.movieYear}>{item.year}</div>
          <div className={style.movieGenre}> {item.genres.join(", ")} </div>

          {detail && (
            <>
              <div>
                <div>타이틀 : {item.title_long}</div>
                <div>런타임 : {item.runtime}</div>
                <div>
                  줄거리 :{" "}
                  {item.summary !== "" ? item.summary : "(줄거리 없음)"}
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
    );
  });

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
  );
}
