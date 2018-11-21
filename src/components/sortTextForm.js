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
  outline: none;
`;

const InputTimeFilter = styled.input`
  width: 69%;
  height: 8.4px;
  cursor: pointer;
  margin-left: 12px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;

  &:focus::-webkit-slider-runnable-track {
    background: transparent;
  }

  &::-moz-range-track {
    width: 83%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  &::-ms-track {
    width: 80%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: black;
  }
  &::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &:focus::-ms-fill-lower {
    background: black;
  }
  &::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

const TimeTitle = styled.p`
  font-size: 14px;
  margin-top: 40px;
`;

const NamesOfDatalistWrapper = styled.div`
  display: flex;
  width: 84%;
  justify-content: space-between;
`;

const NameBlock = styled.div``;

export default ({
  filterList,
  isFilterOpen,
  changeFilterStatus,
  filterTimeList
}) => {
  return isFilterOpen ? (
    <FilterFormWrapper>
      <CloseForm onClick={() => changeFilterStatus(!isFilterOpen)} />
      <InputFilter
        type="text"
        placeholder="Введите искомое название задачи"
        onChange={input => filterList(input.target.value)}
      />
      <TimeTitle> Выберите интервал создания заметки</TimeTitle>
      <InputTimeFilter
        type="range"
        defaultValue={0}
        list="steplist"
        step="50"
        onMouseUp={input => filterTimeList(input.target.value)}
      />

      <datalist id="tickmarks">
        <option value="0" />
        <option value="50" />
        <option value="100" />
      </datalist>

      <NamesOfDatalistWrapper>
        <NameBlock>позавчера</NameBlock>
        <NameBlock>вчера</NameBlock>
        <NameBlock>сейчас</NameBlock>
      </NamesOfDatalistWrapper>
    </FilterFormWrapper>
  ) : null;
};
