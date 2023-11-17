import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRegCirclePlay } from "react-icons/fa6";
import axios from "axios";

const TopSearchRow = () => {
  const [movies, setMovies] = useState([]);
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
    <Wrapper>
      {movies.map((movie) => (
        <Container key={movie.id}>
          <MovieImg
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
          <MovieTitle>{movie.title}</MovieTitle>
          <IconWrapper>
            <FaRegCirclePlay size="30px" />
          </IconWrapper>
        </Container>
      ))}
    </Wrapper>
  );
};

export default TopSearchRow;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 375px;
  height: 76px;
  display: flex;
  background-color: #424242;
  margin: 5px 0px 5px 0px;
`;

const MovieImg = styled.img`
  width: 146px;
  height: 76px;
  border-radius: 2px;
`;

const MovieTitle = styled.div`
  color: white;
  font-size: 13px;
  display: flex;
  align-self: center;
  padding: 10px;
  width: 160px;
`;

const IconWrapper = styled.button`
  display: flex;
  align-self: center;
  color: white;
  background: none;
  border: none;
`;
