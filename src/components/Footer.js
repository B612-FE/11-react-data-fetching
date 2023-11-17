import React from "react";
import styled from "styled-components";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterWrapper>
      <FooterIconWrapper
        onClick={() => {
          navigate("/home");
        }}
      >
        <BiHomeAlt2 size="24" />
        <FooterText>Home</FooterText>
      </FooterIconWrapper>
      <FooterIconWrapper
        onClick={() => {
          navigate("/search");
        }}
      >
        <IoSearchOutline size="24" />
        <FooterText>Search</FooterText>
      </FooterIconWrapper>
      <FooterIconWrapper>
        <MdOutlineVideoLibrary size="24" />
        <FooterText>Coming soon</FooterText>
      </FooterIconWrapper>
      <FooterIconWrapper>
        <GoDownload size="24" />
        <FooterText>Downloads</FooterText>
      </FooterIconWrapper>
      <FooterIconWrapper>
        <IoIosMenu size="24" />
        <FooterText>More</FooterText>
      </FooterIconWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 375px;
  height: 53px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: #121212;
  color: #8c8787;
`;

const FooterIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FooterText = styled.span`
  color: #8c8787;
  font-size: 8px;
`;
