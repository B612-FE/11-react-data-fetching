import React from "react";
import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Playbar = () => {
  return (
    <Container>
      <ButtonWrapper>
        <AiOutlinePlus size="24px" />
        <Text>My List</Text>
      </ButtonWrapper>
      <PlayButton>
        <IoMdPlay size="30px"></IoMdPlay>
        <>Play</>
      </PlayButton>
      <ButtonWrapper>
        <IoIosInformationCircleOutline size="24px" />
        <Text>Info</Text>
      </ButtonWrapper>
    </Container>
  );
};

export default Playbar;

const Container = styled.div`
  width: 355px;
  height: 58px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 41px;
  height: 45px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PlayButton = styled.div`
  width: 110px;
  height: 45px;
  background: #c4c4c4;
  display: flex;
  justify-content: space-evenly;
  border-radius: 5.63px;
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 10px;
`;
