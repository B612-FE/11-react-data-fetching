import React from "react";
import styled from "styled-components";
import homeIcon from "../../../img/homeIcon.svg";
import searchIcon from "../../../img/searchIcon.svg";
import comingsoonIcon from "../../../img/comingsoonIcon.svg";
import downloadsIcon from "../../../img/downloadsIcon.svg";
import moreIcon from "../../../img/moreIcon.svg";

const NavContainer = styled.div`
  position: relative;
`;

const Nav = styled.div`
  position: fixed;
  top: 837px;
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

const HomeButton = styled.img`
  width: 24px;
  height: 24px;
`;

const HomeText = styled.text`
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
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

const SearchButton = styled.img`
  width: 24px;
  height: 24px;
`;

const SearchText = styled.text`
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  color: #8c8787;
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

function BottomNav() {
  return (
    <NavContainer>
      <Nav>
        <Home>
          <HomeButton src={homeIcon} />
          <HomeText>Home</HomeText>
        </Home>
        <Search>
          <SearchButton src={searchIcon} />
          <SearchText>Search</SearchText>
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

export default BottomNav;
