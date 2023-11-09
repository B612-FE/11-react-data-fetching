import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/main");
    }, 3800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  const Container = styled.div`
    height: 780px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container>
      <dotlottie-player
        src="https://lottie.host/c455a98e-8838-4445-9de7-9b38082f2d9b/nuRTO2zZ0m.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay></dotlottie-player>
    </Container>
  );
}

export default LandingPage;
