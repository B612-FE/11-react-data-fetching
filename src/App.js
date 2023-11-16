import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <Router>
      <Wrapper>
        <Container>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </Container>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const Container = styled.div`
  height: 100vh;
  width: 375px;
  background-color: #000000;
`;

export default App;
