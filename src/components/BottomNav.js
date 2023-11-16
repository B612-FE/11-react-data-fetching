import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as homeIcon } from "../assets/homeIcon.svg";
import { ReactComponent as searchIcon } from "../assets/searchIcon.svg";
import comingsoonIcon from "../assets/comingsoonIcon.svg";
import downloadsIcon from "../assets/downloadsIcon.svg";
import moreIcon from "../assets/moreIcon.svg";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToPage = (page) => {
    navigate(page);
  };

  return (
    <NavContainer>
      <Nav>
        <Home onClick={() => goToPage("/main")}>
          <HomeButton isSelected={location.pathname === "/main"} />
          <HomeText isSelected={location.pathname === "/main"}>Home</HomeText>
        </Home>
        <Search onClick={() => goToPage("/search")}>
          <SearchButton isSelected={location.pathname === "/search"} />
          <SearchText isSelected={location.pathname === "/search"}>
            Search
          </SearchText>
        </Search>
        <ComingSoon>
          <ComingSoonButton src={comingsoonIcon} />
          <ComingSoonText>Coming Soon</ComingSoonText>
        </ComingSoon>
        <Downloads>
          <DownloadsButton src={downloadsIcon} />
          <DownloadsText>Downloads</DownloadsText>
        </Downloads>
        <More>
          <MoreButton src={moreIcon} />
          <MoreText>More</MoreText>
        </More>
      </Nav>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 53px;
`;

const Nav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 53px;
  background-color: #121212;
`;

const Home = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45px;
  cursor: pointer;
  margin-right: 42px;
`;

const HomeButton = styled(homeIcon)`
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  .home-path {
    stroke: ${(props) => (props.isSelected ? "#ffffff" : "#8c8787")};
  }
`;

const HomeText = styled.text`
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#8c8787")};
  line-height: 11px;
`;

const Search = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45px;
  cursor: pointer;
  margin-right: 38px;
`;

const SearchButton = styled(searchIcon)`
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  .search-path {
    stroke: ${(props) => (props.isSelected ? "#ffffff" : "#8c8787")};
  }
`;

const SearchText = styled.text`
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#8c8787")};
  line-height: 11px;
`;

const ComingSoon = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45px;
  cursor: pointer;
  margin-right: 36px;
`;

const ComingSoonButton = styled.img`
  width: 24px;
  height: 24px;
`;

const ComingSoonText = styled.text`
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  color: #8c8787;
  line-height: 11px;
`;

const Downloads = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45px;
  cursor: pointer;
  margin-right: 38px;
`;

const DownloadsButton = styled.img`
  width: 24px;
  height: 24px;
`;

const DownloadsText = styled.text`
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  color: #8c8787;
  line-height: 11px;
`;

const More = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45px;
  cursor: pointer;
`;

const MoreButton = styled.img`
  width: 24px;
  height: 24px;
`;

const MoreText = styled.text`
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  color: #8c8787;
  line-height: 11px;
`;

export default BottomNav;
