import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieRow = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        setNowPlaying(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchNowPlaying();
  }, []);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        setTopRated(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTopRated();
  }, []);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        setPopular(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPopular();
  }, []);

  return (
    <MovieColumn>
      <CategoryText>Now Playing</CategoryText>
      <Container>
        {nowPlaying.map(
          (movie) =>
            movie.poster_path && (
              <Poster
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigate(`/detail/${movie.id}`)}
              />
            )
        )}
      </Container>
      <CategoryText>Top Rated</CategoryText>
      <Container>
        {topRated.map(
          (movie) =>
            movie.poster_path && (
              <Poster
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigate(`/detail/${movie.id}`)}
              />
            )
        )}
      </Container>
      <CategoryText>Popular</CategoryText>
      <Container>
        {popular.map(
          (movie) =>
            movie.poster_path && (
              <Poster
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                onClick={() => navigate(`/detail/${movie.id}`)}
              />
            )
        )}
      </Container>
    </MovieColumn>
  );
};

export default MovieRow;

const MovieColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 375px;
  height: 161px;
  display: flex;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Poster = styled.img`
  width: 103px;
  height: 161px;
  aspect-ratio: auto 103 / 161;
  margin-right: 8px;
  cursor: pointer;
  object-fit: cover;
`;

const CategoryText = styled.div`
  width: 359px;
  margin-left: 4px;
  height: 39px;
  font-size: 26px;
  font-weight: 700;
  margin: 8px;
`;
