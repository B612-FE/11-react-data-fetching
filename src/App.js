import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MainPage from "./Pages/MainPage";
import BottomNav from ".Pages//Elements/Nav/BottomNav";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const Container = styled.div`
  width: 375px;
  height: 780px;
  background-color: #000000;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </Router>
        <BottomNav />
      </Container>
    </Wrapper>
  );
}

export default App;
