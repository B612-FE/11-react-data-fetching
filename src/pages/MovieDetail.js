import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { IoMdPlay } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState();
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      <Container>
        <Poster src={`https://image.tmdb.org/t/p/w300${state.poster_path}`} />
        <Playbar>
          <IoMdPlay />
          <>Play</>
        </Playbar>
        <Wrapper>
          <Title>Previews</Title>
          <Detail>
            Armed with every weapon they can get their hands on and the skills
            to use them, The Expendables are the world last line of defense and
            the team that gets called when all other options are off the table.
            But new team members with new styles and tactics are going to give
            “new blood” a whole new meaning.
          </Detail>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default MovieDetail;

const Container = styled.div`
  display: flex;
  width: 375px;
  height: 100vh;
  background-color: black;
  color: white;
  flex-direction: column;
`;

const Poster = styled.img`
  width: 375px;
  height: 415px;
  border: none;
`;

const Playbar = styled.div`
  width: 303px;
  height: 50px;
  background: #c4c4c4;
  display: flex;
  justify-content: space-evenly;
  border-radius: 5.63px;
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  align-self: center;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  padding: 32px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  padding-bottom: 20px;
`;

const Detail = styled.div`
  font-size: 13px;
`;
