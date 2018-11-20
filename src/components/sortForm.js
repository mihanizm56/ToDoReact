import React from "react";
import styled from "styled-components";

const InputFilter = styled.input`
  position: absolute;
  top: 67px;
  right: 50px;
  width: 200px;
  height: 20px;
  cursor: pointer;
`;

export default () => {
  const _select = React.createRef();
  return <InputFilter />;
};
