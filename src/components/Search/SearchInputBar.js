import React, { useState } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";

const SearchInputBar = () => {
  return (
    <SearchForm>
      <IoSearchOutline color="#c4c4c4" size="20px"></IoSearchOutline>
      <Input placeholder="Search for a show, movie, genre, e.t.c."></Input>
      <DeleteButton>
        <HiXMark size="15px"></HiXMark>
      </DeleteButton>
    </SearchForm>
  );
};

export default SearchInputBar;

const SearchForm = styled.form`
  position: fixed;
  top: 0;
  display: flex;
  width: 375px;
  height: 52px;
  background-color: #424242;
  margin-top: 44px;
  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  width: 270px;
  height: 31px;
  background-color: #424242;
  color: #c4c4c4;
  border: none;
  &:focus {
    outline: none;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: #424242;
  color: #c4c4c4;
  border: none;
  display: flex;
  justify-content: center;
`;
