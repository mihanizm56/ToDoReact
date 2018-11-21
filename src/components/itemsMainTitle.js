import React from "react";
import styled from "styled-components";

const TitleParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  font-size: 29px;
  width: 350px;
  min-height: 50px;
  border-radius: 15px;
  background-color: #dfe3e6;
`;

export const ItemsMainTitle = () => (
    <TitleParagraph>Нужно сделать</TitleParagraph>
);
