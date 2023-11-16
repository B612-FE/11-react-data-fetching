import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PopularAPI } from "../services/api";
import FlowText from "../components/search/FlowText";
import BottomNav from "../components/BottomNav";

import SearchIcon from "../assets/searchIcon.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import playButton from "../assets/playButton.svg";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const setTopMovie = async () => {
      const movies = (await PopularAPI()).slice(0, 10);
      setMovies(movies);
    };

    setTopMovie();
  }, []);

  return (
    <Container>
      <Wrapper>
        <SearchBar>
          <SearchImg src={SearchIcon} />
          <SearchBarText>Search for a show, movie, genre, etc.</SearchBarText>
          <DeleteButton src={deleteIcon} />
        </SearchBar>
        <SearchText>Top Searches</SearchText>
        <ListContainer>
          {movies.map((movie) => (
            <MovieList key={movie.id}>
              <MovieImg
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              />
              <MovieTitle>
                <FlowText text={movie.title} />
              </MovieTitle>
              <PlayIcon onClick={() => navigate(`/detail/${movie.id}`)} />
            </MovieList>
          ))}
        </ListContainer>
      </Wrapper>
      <BottomNav />
    </Container>
  );
}

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 53px;
`;

const SearchBar = styled.div`
  background-color: #424242;
  width: 375px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;

const SearchBarText = styled.text`
  margin-left: 10px;
  width: 270px;
  height: 30px;
  color: #c4c4c4;
  font-size: 15px;
  line-height: 30px;
`;

const DeleteButton = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 25px;
`;

const SearchText = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  line-height: 20px;
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 30px;
`;

const ListContainer = styled.div`
  // 영화 목록 container
  display: flex;
  flex-direction: column;
`;

const MovieList = styled.div`
  // 영화 하나씩 wrapper
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #424242;
  margin-bottom: 4px;
  height: 76px;
  width: 375px;
  white-space: nowrap;
`;

const MovieImg = styled.img`
  width: 146px;
  height: 76px;
  object-fit: cover;
`;

const MovieTitle = styled.text`
  width: 140px;
  margin-left: 20px;
  font-size: 15px;
  color: #fff;
`;

const PlayIcon = styled.button`
  width: 28px;
  height: 28px;
  border: 0;
  margin-left: 25px;
  background-color: transparent;
  cursor: pointer;
  background-image: url(${playButton});
`;

export default SearchPage;
