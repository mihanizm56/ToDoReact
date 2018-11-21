import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import plusIcon from "./img/plus.png";

const ButtonOpen = styled.button`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 50px;
  height: 50px;
  background-image: url(${plusIcon});
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

export const OpenIcon = ({ isOpen, changeFormStatus }) => {
  return isOpen ? null : (
    <ButtonOpen onClick={() => changeFormStatus(!isOpen)} />
  );
};

OpenIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  changeFormStatus: PropTypes.func.isRequired
}