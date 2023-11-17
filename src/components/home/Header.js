import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo src={`${process.env.PUBLIC_URL}/img/netflix_logo.png`}></Logo>
      <MenuText>TV Shows</MenuText>
      <MenuText>Movies</MenuText>
      <MenuText>My List</MenuText>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 338px;
  height: 57px;
  background: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 24px;
`;

const Logo = styled.img`
  width: 57px;
  height: 57px;
`;

const MenuText = styled.div`
  color: white;
  font-size: 17.2px;
  cursor: pointer;
`;
