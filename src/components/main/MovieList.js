import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
  PreviewsAPI,
  PopularAPI,
  TopRatedAPI,
  UpcomingAPI,
} from "../../services/api";

const fetchMovies = async (apiFunction) => {
  try {
    const movies = await apiFunction();
    return movies;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export function Previews() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies(PreviewsAPI);
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <PreviewsContainer>
      <TitleText>Previews</TitleText>
      <MovieListContainer>
        <MovieList>
          {movies.map((movie) => (
            <PreviewsMovieImageWrapper key={movie.id}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigate(`/detail/${movie.id}`)}
              />
            </PreviewsMovieImageWrapper>
          ))}
        </MovieList>
      </MovieListContainer>
    </PreviewsContainer>
  );
}

export function PopularOn() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies(PopularAPI);
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <Container>
      <TitleText>Popular on Netflix</TitleText>
      <MovieListContainer>
        <MovieList>
          {movies.map((movie) => (
            <MovieImageWrapper key={movie.id}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigate(`/detail/${movie.id}`)}
              />
            </MovieImageWrapper>
          ))}
        </MovieList>
      </MovieListContainer>
    </Container>
  );
}

export function TopRated() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies(TopRatedAPI);
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <Container>
      <TitleText>Top Rated</TitleText>
      <MovieListContainer>
        <MovieList>
          {movies.map((movie) => (
            <MovieImageWrapper key={movie.id}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigate(`/detail/${movie.id}`)}
              />
            </MovieImageWrapper>
          ))}
        </MovieList>
      </MovieListContainer>
    </Container>
  );
}

export function Upcoming() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies(UpcomingAPI);
      setMovies(movies);
    };
    getMovies();
  }, []);

  return (
    <Container>
      <TitleText>Upcoming</TitleText>
      <MovieListContainer>
        <MovieList>
          {movies.map((movie) => (
            <MovieImageWrapper key={movie.id}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigate(`/detail/${movie.id}`)}
              />
            </MovieImageWrapper>
          ))}
        </MovieList>
      </MovieListContainer>
    </Container>
  );
}

const PreviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 28px;
`;

const TitleText = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  line-height: 20px;
  margin-left: 16px;
  margin-bottom: 20px;
`;

const MovieListContainer = styled.div`
  max-width: 363px;
  overflow-x: scroll;
  margin-left: 12px;
`;

const MovieList = styled.div`
  display: flex;
  gap: 10px;
`;

const PreviewsMovieImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;

const MovieImageWrapper = styled.div`
  width: 103px;
  height: 161px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
