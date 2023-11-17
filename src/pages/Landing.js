import React, { useEffect } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import NetflixLottie from "../components/landing/NetflixLottie.json";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const timeOut = () => {
    setTimeout(() => {
      navigate("/home");
    }, 4000);
  };

  useEffect(() => {
    timeOut();
    clearTimeout(timeOut);
  });
  return (
    <Container>
      <LottieWrapper>
        <Lottie animationData={NetflixLottie} />
      </LottieWrapper>
    </Container>
  );
};
export default Landing;

const LottieWrapper = styled.div`
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  width: 375px;
  height: 100vh;
  background-color: #000000;
  color: white;
  justify-content: center;
  align-items: center;
`;
