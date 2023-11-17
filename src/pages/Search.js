import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import SearchInputBar from "../components/Search/SearchInputBar";
import TopSearchRow from "../components/Search/TopSearchRow";

const Search = () => {
  return (
    <>
      <Container>
        <TopWrapper>
          <SearchInputBar></SearchInputBar>
          <SubjectText>Top Searches</SubjectText>
        </TopWrapper>
        <ListWrapper>
          <TopSearchRow />
        </ListWrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Search;

const ListWrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100%;
  background-color: #000000;
  color: white;
  justify-content: center;
  position: relative;
`;

const SubjectText = styled.div`
  display: flex;
  color: #ffffff;
  font-weight: bold;
  height: 35px;
  font-size: 26px;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 100px;
  background-color: black;
  width: 375px;
`;

const TopWrapper = styled.div`
  height: 150px;
  top: 0;
  z-index: 1000;
`;
