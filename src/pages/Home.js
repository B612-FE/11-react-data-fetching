import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MainImage from "../components/home/MainImage";
import Playbar from "../components/home/Playbar";
import PreviewCircle from "../components/home/PreviewCircle";
import MovieRow from "../components/home/MovieRow";

const Home = () => {
  return (
    <>
      <Container>
        <MainImage />
        <Playbar />
        <CategoryText>Previews</CategoryText>
        <PreviewCircle />
        <MovieRow />
      </Container>
      <Footer />
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 375px;
  height: 1385px;
  background-color: black;
  color: white;
  position: relative;
`;

const CategoryText = styled.div`
  width: 359px;
  margin-left: 4px;
  height: 39px;
  font-size: 26px;
  font-weight: 700;
  margin: 8px;
`;
