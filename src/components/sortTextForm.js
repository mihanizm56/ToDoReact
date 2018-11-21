import React from "react";
import styled from "styled-components";

import crossIcon from "../components/img/cross_1.png";

const FilterFormWrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 350px;
  height: 260px;
  border-radius: 15px;
  border: none;
  background-color: #dfe3e6;
  animation: fadeInRight 0.5s both;

  @keyframes fadeInRight {
    from {
      transform: translateX(1900px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const CloseForm = styled.button`
  position: absolute;
  top: 8px;
  left: 316px;
  width: 25px;
  height: 25px;
  border: none;
  background-image: url(${crossIcon});
  background-color: #dfe3e6;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
`;

const InputFilter = styled.textarea`
  min-width: 80%;
  max-width: 90%;
  min-height: 30px;
  max-height: 100px;
  padding-left: 10px;
  margin-top: 40px;
  font-family: Arial;
  font-size: 22px;
  border: 0.5px solid #d9dfe2;
  border-radius: 10px;
  outline: 0;
`;

export default ({ filterList, isFilterOpen, changeFilterStatus }) => {
  return isFilterOpen ? (
    <FilterFormWrapper>
      <CloseForm onClick={() => changeFilterStatus(!isFilterOpen)} />
      <InputFilter
        type="text"
        placeholder="Введите искомое название задачи"
        onKeyUp={input => filterList(input.target.value)}
      />
    </FilterFormWrapper>
  ) : null;
};
