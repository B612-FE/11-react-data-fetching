import React from "react";
import styled from "styled-components";
import netflixLogo from "../../../img/netflixLogo.svg";

const Nav = styled.nav`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 338px;
  height: 57px;
  margin: 23px;
  flex-shrink: 0;
`;

const Logo = styled.img`
  width: 40px;
  height: 50px;
  flex-shrink: 0;
  margin-left: 3px;
  margin-right: 8px;
`;

const MenuItem = styled.a`
  margin-left: 23px;
  color: #ffffff;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.8px;
  cursor: pointer;
  &:hover {
    color: #b9090b;
  }
`;

function Navigator() {
  return (
    <Nav>
      <Logo src={netflixLogo} />
      <MenuItem>TV Shows</MenuItem>
      <MenuItem>Movies</MenuItem>
      <MenuItem>My List</MenuItem>
    </Nav>
  );
}

export default Navigator;
