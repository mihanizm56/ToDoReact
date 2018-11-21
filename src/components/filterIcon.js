import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import findIcon from "./img/lupa.svg";

const ButtonFIlterOpen = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  background-image: url(${findIcon});
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-color: #0079bf;
  cursor: pointer;
  outline:none;
  animation: fadeInLeft 0.5s both;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const FilterIcon = ({ isFilterOpen, changeFilterStatus }) => {
  return isFilterOpen ? null : (
    <ButtonFIlterOpen onClick={() => changeFilterStatus(!isFilterOpen)} />
  );
};

FilterIcon.propTypes = {
  isFilterOpen: PropTypes.bool.isRequired,
  changeFilterStatus: PropTypes.func.isRequired
}