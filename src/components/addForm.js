import React from "react";
import { default as UUID } from "node-uuid";
import styled from "styled-components";
import { getTimeInMs,getTime } from '../scripts/scripts'
import crossIcon from "./img/cross_1.png";

const FormWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  height: 260px;
  border-radius: 15px;
  background-color: #dfe3e6;
  animation: fadeInLeft 0.5s both;

  @keyframes fadeInLeft {
    from {
      transform: translateX(-900px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const InputTitle = styled.textarea`
  min-width: 80%;
  max-width: 90%;
  min-height: 30px;
  max-height: 100px;
  padding-left: 10px;
  margin-top: 20px;
  font-family: Arial;
  font-size: 22px;
  border: 0.5px solid #d9dfe2;
  border-radius: 10px;
  outline: 0;
`;

const InputTask = styled.textarea`
  min-width: 80%;
  max-width: 90%;
  min-height: 30px;
  max-height: 100px;
  padding-left: 10px;
  margin-top: 10px;
  font-family: Arial;
  font-size: 22px;
  border: 0.5px solid #d9dfe2;
  border-radius: 10px;
  outline: 0;
`;

const InputTime = styled.input`
  min-width: 70%;
  max-width: 80%;
  min-height: 30px;
  max-height: 100px;
  padding-left: 10px;
  margin-top: 10px;
  font-family: Arial;
  font-size: 22px;
  border: none;
  border-radius: 10px;
  outline: 0;
`;

const SaveForm = styled.button`
  display: flex;
  justify-content: center;
  font-family: Arial;
  color: #fff;
  font-size: 20px;
  padding-left: 10px;
  height: 50px;
  width: 200px;
  background-color: #5aac44;
  border-radius: 15px;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #63a34e;
  }
  &:active {
    background-color: #658b67;
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
  outline:none;
`;

export default ({ isOpen, addItem, changeFormStatus, getFormData }) => {
  console.log("check addForm");
  return isOpen
    ? getForm(addItem, changeFormStatus, isOpen, getFormData)
    : null;
};

const getForm = (
  functionToSave,
  functionToClose,
  status,
  functionToGetData
) => {
  let textInput = React.createRef();
  let titleInput = React.createRef();
  let timeInput = new Date()
  return (
    <FormWrapper>
      <InputTitle
        ref={input => (titleInput = input)}
        placeholder="Введите заголовок задачи"
      />
      <InputTask
        ref={input => (textInput = input)}
        type="text"
        placeholder="Введите задачу"
      />
      <SaveForm onClick={() => functionToSave(functionToGetData(titleInput, textInput, getTime(timeInput),getTimeInMs(timeInput), UUID.v4())) }>Save</SaveForm>
      <CloseForm onClick={() => functionToClose(!status)} />
    </FormWrapper>
  );
};
 
