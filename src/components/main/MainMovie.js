import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PopularAPI } from "../../services/api";
import TopTenText from "./TopTenText";

import InfoButtonImg from "../../assets/infoIcon.svg";
import PlayButtonImg from "../../assets/playIcon.svg";
import PlusButtonImg from "../../assets/plusIcon.svg";

function getRandomRank() {
  return Math.floor(Math.random() * 10) + 1;
}

function MainMovie() {
  const [movie, setMovie] = useState(null);
  const [rank] = useState(getRandomRank());

  const navigate = useNavigate();

  useEffect(() => {
    const setRandomMovie = async () => {
      const movies = (await PopularAPI()).slice(0, 10);
      const randomIndex = rank - 1;
      const chosenMovie = movies[randomIndex];
      setMovie(chosenMovie);
    };

    setRandomMovie();
  }, []);

  return (
    <Container>
      <MainImgWrapper>
        {movie && (
          <MainImg
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <TopTenText rank={rank} />
      </MainImgWrapper>
      <MenuWrapper>
        <ButtonWrapper>
          <ButtonImg src={PlusButtonImg} />
          <MenuText>My List</MenuText>
        </ButtonWrapper>
        <Play>
          <PlayButton src={PlayButtonImg} />
          <PlayText>Play</PlayText>
        </Play>
        <ButtonWrapper onClick={() => navigate(`/detail/${movie.id}`)}>
          <ButtonImg src={InfoButtonImg} />
          <MenuText>Info</MenuText>
        </ButtonWrapper>
      </MenuWrapper>
    </Container>
  );
}

const Container = styled.div``;

const MainImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 415px;
  object-fit: cover;
  object-position: top;
`;

const MenuWrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 430px;
  width: 260px;
  height: 45px;
`;

const ButtonImg = styled.img`
  width: 24px;
  height: 24px;
`;

const MenuText = styled.text`
  white-space: nowrap;
  font-size: 14px;
  line-height: 20px;
  margin-top: 2px;
  color: #ffffff;
`;

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const PlayButton = styled.img`
  width: 18px;
  height: 20px;
`;

const Play = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 110px;
  height: 45px;
  border: 0;
  border-radius: 6px;
  background-color: #c4c4c4;
  cursor: pointer;
`;

const PlayText = styled.text`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-left: 10px;
`;

export default MainMovie;
