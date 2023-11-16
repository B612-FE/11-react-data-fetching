import React from "react";
import styled from "styled-components";

import netflixLogo from "../../assets/netflixLogo.svg";

function TopNav() {
  return (
    <Nav>
      <Logo src={netflixLogo} />
      <MenuItem>TV Shows</MenuItem>
      <MenuItem>Movies</MenuItem>
      <MenuItem>My List</MenuItem>
    </Nav>
  );
}

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
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.8px;
  cursor: pointer;
  &:hover {
    color: #b9090b;
  }
`;

export default TopNav;
