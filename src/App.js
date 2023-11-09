import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MainPage from "./Pages/MainPage";
import BottomNav from "./Pages/Elements/Nav/BottomNav";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const Container = styled.div`
  height: 780px;
  width: 375px;
  background-color: #000000;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Container>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
          <BottomNavWrapper />
        </Container>
      </Wrapper>
    </Router>
  );
}

function BottomNavWrapper() {
  const location = useLocation();

  return location.pathname === "/main" ? <BottomNav /> : null;
}

export default App;
