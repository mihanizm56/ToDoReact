import React from "react";
import styled from "styled-components";

const ButtonOpen = styled.button`
    width:100px;
    height:30px;
`

export default ({isOpen,changeFormStatus})=>{
    return isOpen ? null : <ButtonOpen onClick={()=> changeFormStatus(!isOpen)}>Добавить задачу</ButtonOpen>
}