import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { DetailAPI } from "../services/api";
import BottomNav from "../components/BottomNav";
import playIcon from "../assets/playIcon.svg";

function DetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await DetailAPI(id);
      setMovie(movieData);
    };

    fetchData();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <Container>
      <Wrapper>
        <MovieImg src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <PlayButton>
          <PlayIcon src={playIcon} />
          <PlayText>Play</PlayText>
        </PlayButton>
      </Wrapper>
      <PreviewWrapper>
        <PreviewsText>Previews</PreviewsText>
        <DetailText>{movie.overview}</DetailText>
      </PreviewWrapper>
      <BottomNav />
    </Container>
  );
}

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MovieImg = styled.img`
  width: 375px;
  height: 415px;
  object-fit: cover;
`;

const PlayButton = styled.button`
  width: 300px;
  height: 45px;
  margin-top: 20px;
  background-color: #c4c4c4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
`;

const PlayIcon = styled.img`
  width: 18px;
  height: 21.6px;
`;

const PlayText = styled.text`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-left: 15px;
`;

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PreviewsText = styled.text`
  color: #ffffff;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  line-height: 20px;
  margin-top: 32px;
  margin-left: 32px;
  margin-bottom: 24px;
`;

const DetailText = styled.text`
  color: #fff;
  font-size: 11px;
  line-height: 14px;
  margin-left: 32px;
  margin-right: 32px;
`;

export default DetailPage;
