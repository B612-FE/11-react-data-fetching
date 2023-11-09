import { useState, useEffect } from "react";
import styled from "styled-components";
import MainText from "./MainText";

function MainImage() {
  const [movie, setMovie] = useState(null);
  const [rank] = useState(getRandomRank());

  useEffect(() => {
    const setRandomMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTkyYmY3N2MyYmZkOWRkMjc5MzQ2MjIzZDg4MzYyMiIsInN1YiI6IjY1NDdlNTUxNDFhNTYxMzM2YzVkMzY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Xyt7tJv1J9VhF7RtZ0ABUGDNoB2KH8oeyGB0UnUJpg",
        },
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const data = await response.json();
      const movies = data.results.slice(0, 10); // 1~10순위 영화만 추출
      const randomIndex = rank - 1;
      const chosenMovie = movies[randomIndex];
      setMovie(chosenMovie);
    };

    setRandomMovie();
  }, []);

  const MainImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 375px;
    height: 415px;
    object-fit: cover;
    object-position: top;
  `;

  return (
    <>
      {movie && (
        <MainImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <MainText rank={rank} />
    </>
  );
}

function getRandomRank() {
  return Math.floor(Math.random() * 10) + 1;
}

export default MainImage;
