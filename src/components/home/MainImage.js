import React from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";

const MainImage = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainMovie src={`${process.env.PUBLIC_URL}/img/sample.jpg`}></MainMovie>
    </Container>
  );
};

export default MainImage;

const Container = styled.div`
  width: 375px;
  height: 415px;
  position: relative;
`;
const MainMovie = styled.img`
  width: 375px;
  height: 415px;
  object-fit: cover;
  z-index: 1;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
