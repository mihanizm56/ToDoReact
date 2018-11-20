import React, { Component } from "react";
import "./App.css";

import AddForm from "./components/addForm";
import OpenForm from "./components/openForm";
import ListItems from "./components/listItems";
import ItemsMainTitle from "./components/itemsMainTitle";
import SortForm from "./components/sortTextForm";

import { getFormData } from "./scripts/scripts";

class App extends Component {
  constructor() {
    super();

    const listData = localStorage.data ? JSON.parse(localStorage.data) : [];
    this.state = { listData: listData, isOpen: false };
  }

  ///////////// Block of functions

  addItem = object => {
    if (object) {
      const listArray = [...this.state.listData];
      listArray.push(object);
      localStorage.data = JSON.stringify(listArray);
      return this.setState({
        ...this.state,
        listData: listArray,
        isOpen: false,
        isMaking: false
      });
    }
  };

  removeItem = id => {
    const arrayOfTasks = [...this.state.listData].filter(item => item.id != id);
    localStorage.data = JSON.stringify(arrayOfTasks);
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  saveItem = id => {
    const arrayOfTasks = [...this.state.listData];
    arrayOfTasks.forEach(element => {
      if (element.id == id) element.isMaking = false;
    });
    localStorage.data = JSON.stringify(arrayOfTasks);
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  changeMakingStatus = id => {
    const arrayOfTasks = [...this.state.listData];
    arrayOfTasks.forEach(element => {
      if (element.id == id) element.isMaking = true;
    });
    localStorage.data = JSON.stringify(arrayOfTasks);
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  changeDoneStatus = id => {
    const arrayOfTasks = [...this.state.listData];
    arrayOfTasks.forEach(element => {
      if (element.id == id) element.done = !element.done;
    });
    localStorage.data = JSON.stringify(arrayOfTasks);
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  changeFormStatus = parameter => {
    console.log(parameter);
    return this.setState({ ...this.state, isOpen: parameter });
  };

  changeText = (id, text, parameter) => {
    const arrayOfTasks = [...this.state.listData];

    if (parameter === "title") {
      arrayOfTasks.forEach(element => {
        if (element.id == id) element.title = text;
      });
    }

    if (parameter === "task") {
      arrayOfTasks.forEach(element => {
        if (element.id == id) element.text = text;
      });
    }
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  filterList = text => {
    const arrayOfTasks = [...this.state.listData];

    if (parameter === "title") {
      arrayOfTasks.forEach(element => {
        if (text.indexOf(element.text)) console.log('Нашёл совпадение')
      });
    } 
  }

  render() {
    const { isOpen, listData } = this.state;
    return (
      <div className="App">
        <div className="main-wrapper">
          <ItemsMainTitle />
          <ListItems
            listData={listData}
            removeItem={this.removeItem}
            saveItem={this.saveItem}
            changeDoneStatus={this.changeDoneStatus}
            changeMakingStatus={this.changeMakingStatus}
            changeText={this.changeText}
          />
        </div>
        <OpenForm isOpen={isOpen} changeFormStatus={this.changeFormStatus}>
          Добавить задачу
        </OpenForm>
        <AddForm
          isOpen={isOpen}
          addItem={this.addItem}
          changeFormStatus={this.changeFormStatus}
          getFormData={getFormData}
        />
        <SortForm listData={listData} filterList={this.filterList}/>
      </div>
    );
  }
}

export default App;
