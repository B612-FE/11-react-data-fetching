import React from "react";
import styled from "styled-components";
import Navigator from "./Elements/Nav/Navigator";
import MainImage from "./Elements/MainImage";
import MainMenu from "./Elements/MainMenu";
import Previews from "./Elements/MovieList/Previews";
import PopularOn from "./Elements/MovieList/PopularOn";
import TopRated from "./Elements/MovieList/TopRated";
import Upcoming from "./Elements/MovieList/Upcoming";

function MainPage() {
  const Container = styled.div`
    max-height: 780px;
    overflow-y: scroll;
  `;

  const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
  `;

  const MovieListWrapper = styled.div`
    display: flex;
    margin-top: 40px;
    margin-left: 10px;
    flex-direction: column;
    margin-bottom: 60px;
  `;

  return (
    <Container>
      <Wrapper>
        <Navigator />
        <MainImage />
        <MainMenu />
      </Wrapper>
      <MovieListWrapper>
        <Previews />
        <PopularOn />
        <TopRated />
        <Upcoming />
      </MovieListWrapper>
    </Container>
  );
}

export default MainPage;
