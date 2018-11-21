import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  height: 100%;
`;

const ItemForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 350px;
  height: 210px;
  background-color: #dfe3e6;
  border: 1px solid #000;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const TitleData = styled.textarea`
  padding-top: 1px;
  text-align: center;
  font-size: 17px;
  margin-left: 76px;
  width: 180px;
  height: 20px;
`;

const TextData = styled.textarea`
  padding-top: 10px;
  font-size: 17px;
  margin-left: 26px;
  width: 286px;
  height: 30px;
`;

const TimeData = styled.textarea`
  width: 200px;
  height: 20px;
`;

const StatusOfTask = styled.input`
  width: 30px;
  height: 30px;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const ChangeItem = styled.button`
  font-family: Arial;
  color: #fff;
  font-size: 15px;
  padding-left: 10px;
  background-color: #5aac44;
  border-radius: 15px;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: 0.3s;
  height: 41px;
  width: 130px;
`;

const SaveItem = styled.button`
  font-family: Arial;
  color: #fff;
  font-size: 15px;
  padding-left: 10px;
  background-color: #5aac44;
  border-radius: 15px;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: 0.3s;
  height: 41px;
  width: 100px;
`;

const DeleteItem = styled.button`
  font-family: Arial;
  color: #fff;
  font-size: 15px;
  padding-left: 10px;
  background-color: #5aac44;
  border-radius: 15px;
  border: none;
  outline: 0;
  cursor: pointer;
  transition: 0.3s;
  height: 41px;
  width: 90px;
`;

export const ListItems = ({
  listData,
  removeItem,
  saveItem,
  changeDoneStatus,
  changeMakingStatus,
  changeText
}) => {
  return (
    <ItemsWrapper>
      {listData.map(element => {
        return (
          <ItemForm key={element.id}>
            <TitleData
              onChange={input =>
                changeText(element.id, input.target.value, "title")
              }
              disabled={element.isMaking ? false : true}
              defaultValue={element.title}
              style={
                element.done
                  ? { fontStyle: "italic", textDecoration: "line-through" }
                  : null
              }
            />
            <TextData
              onChange={input =>
                changeText(element.id, input.target.value, "task")
              }
              disabled={element.isMaking ? false : true}
              defaultValue={element.text}
              style={
                element.done
                  ? { fontStyle: "italic", textDecoration: "line-through" }
                  : null
              }
            />
            <RowWrapper>
              <TimeData value={element.time} disabled />
              <StatusOfTask
                type="checkbox"
                onChange={() => changeDoneStatus(element.id)}
                checked={element.done}
              />
            </RowWrapper>
            <ButtonWrapper>
              <ChangeItem onClick={() => changeMakingStatus(element.id)}>
                Редактировать
              </ChangeItem>
              <SaveItem onClick={() => saveItem(element.id)}>
                Сохранить
              </SaveItem>
              <DeleteItem onClick={() => removeItem(element.id)}>
                Удалить
              </DeleteItem>
            </ButtonWrapper>
          </ItemForm>
        );
      })}
    </ItemsWrapper>
  );
};

ListItems.propTypes = {
  listData: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  changeDoneStatus: PropTypes.func.isRequired,
  changeMakingStatus: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired
};
