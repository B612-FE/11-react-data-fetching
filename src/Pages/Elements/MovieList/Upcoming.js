import { useState, useEffect } from "react";
import styled from "styled-components";

const UpcomingText = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  line-height: 20px;
  margin-left: 6px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 28px;
`;

const MovieListContainer = styled.div`
  max-width: 363px;
  overflow-x: scroll;
  margin-left: 2px;
`;

const MovieList = styled.div`
  display: flex;
  gap: 10px;
`;

const MovieImageWrapper = styled.div`
  width: 103px;
  height: 161px;
  overflow: hidden;
  flex-shrink: 0;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Upcoming() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTkyYmY3N2MyYmZkOWRkMjc5MzQ2MjIzZDg4MzYyMiIsInN1YiI6IjY1NDdlNTUxNDFhNTYxMzM2YzVkMzY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Xyt7tJv1J9VhF7RtZ0ABUGDNoB2KH8oeyGB0UnUJpg",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <UpcomingText>Upcoming</UpcomingText>
      <MovieListContainer>
        <MovieList>
          {movies.map((movie) => (
            <MovieImageWrapper key={movie.id}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </MovieImageWrapper>
          ))}
        </MovieList>
      </MovieListContainer>
    </Container>
  );
}

export default Upcoming;
