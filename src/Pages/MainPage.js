import React from "react";
import styled from "styled-components";

import TopNav from "../components/main/TopNav";
import MainMovie from "../components/main/MainMovie";
import {
  Previews,
  PopularOn,
  TopRated,
  Upcoming,
} from "../components/main/MovieList";
import BottomNav from "../components/BottomNav";

function MainPage() {
  return (
    <Container>
      <Wrapper>
        <TopNav />
        <MainMovie />
      </Wrapper>
      <MovieListWrapper>
        <Previews />
        <PopularOn />
        <TopRated />
        <Upcoming />
      </MovieListWrapper>
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
`;

const MovieListWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  margin-bottom: 53px;
`;

export default MainPage;
