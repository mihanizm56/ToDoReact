import React from "react";
import styled from "styled-components";

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  flex-grow:1;
  height:100%;
`

const ItemForm = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid red;
`;

const TextData = styled.p`
  width: 200px;
  height: 20px;
`;

const TimeData = styled.div`
  width: 200px;
  height: 20px;
`;

const StatusOfTask = styled.input`
  width: 20px;
  height: 20px;
`;

const SaveItem = styled.button`
  width: 100px;
  height: 20px;
`;

const DeleteItem = styled.button`
  width: 200px;
  height: 20px;
`;

export default ({ listData }) => {
  return (
    <ItemsWrapper>
      {listData.map((element, index) => {
        return (
          <ItemForm key={index}>
            <TextData>{element.text}</TextData>
            <TimeData>{element.time}</TimeData>
            <StatusOfTask type="checkbox" />
            <SaveItem>Сохранить задачу</SaveItem>
            <DeleteItem>Удалить задачу</DeleteItem>
          </ItemForm>
        );
      })}
    </ItemsWrapper>
  );
};
