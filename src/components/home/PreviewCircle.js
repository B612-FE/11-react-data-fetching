import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PreviewCircle = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      {movies.map(
        (movie) =>
          movie.poster_path && (
            <Poster
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              onClick={() =>
                navigate(`/detail/${movie.id}`, {
                  state: { poster_path: `${movie.poster_path}` },
                })
              }
            />
          )
      )}
    </Container>
  );
};

export default PreviewCircle;

const Container = styled.div`
  width: 375px;
  height: 130px;
  display: flex;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Poster = styled.img`
  width: 150px;
  height: 102px;
  object-fit: cover;
  object-position: center center;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
`;
