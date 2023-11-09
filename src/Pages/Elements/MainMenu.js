import React from "react";
import styled from "styled-components";
import InfoButtonImg from "../../img/info.svg";
import PlayButtonImg from "../../img/play.svg";
import PlusButtonImg from "../../img/plus.svg";

const Menu = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 430px;
  width: 259px;
  height: 45px;
`;

const PlusButton = styled.img`
  width: 24px;
  height: 24px;
`;

const PlayButton = styled.img`
  width: 18px;
  height: 20px;
`;

const InfoButton = styled.img`
  width: 24px;
  height: 24px;
`;

const MyList = styled.button`
  width: 41px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MyListText = styled.text`
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  white-space: nowrap;
`;

const Info = styled.button`
  width: 24px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InfoText = styled.text`
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  white-space: nowrap;
`;

const Play = styled.button`
  width: 110px;
  height: 45px;
  border: 0;
  background-color: #c4c4c4;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const PlayText = styled.text`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin-left: 10px;
`;

function MainMenu() {
  return (
    <Menu>
      <MyList>
        <PlusButton src={PlusButtonImg} />
        <MyListText>My List</MyListText>
      </MyList>
      <Play>
        <PlayButton src={PlayButtonImg} />
        <PlayText>Play</PlayText>
      </Play>
      <Info>
        <InfoButton src={InfoButtonImg} />
        <InfoText>Info</InfoText>
      </Info>
    </Menu>
  );
}

export default MainMenu;
