import React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
    position:absolute;
    top:300px;
    left:100px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 1px solid red;
`;

const InputTask = styled.input`
  width: 200px;
  height: 20px;
`;

const InputTime = styled.input`
  width: 100px;
  height: 30px;
`;

const SaveForm = styled.button`
  width: 100px;
  height: 30px;
`;

const CloseForm = styled.button`
  width: 100px;
  height: 30px;
`;

export default ({ isOpen, addItem, changeFormStatus, getFormData}) => {
    console.log('check addForm')
  return isOpen ? getForm(addItem,changeFormStatus,isOpen,getFormData) : null;
};

const getForm = (functionToSave,functionToClose,status,functionToGetData) => {
    let textInput = React.createRef();
    let timeInput = React.createRef();
  return (
    <FormWrapper>
      <InputTask ref={input => textInput = input} type="text" placeholder="Введите задачу" />
      <InputTime ref={input => timeInput = input} type="date" />
      <SaveForm onClick={()=> functionToSave(functionToGetData(textInput,timeInput))}>Save</SaveForm>
      <CloseForm onClick={()=>functionToClose(!status)}>Close</CloseForm>
    </FormWrapper>
  );
};

