import React, { Component } from "react";

import "./App.css";

import {AddForm} from "./components/addForm";
import {OpenIcon} from "./components/openIcon";
import { ListItems } from "./components/listItems";
import { ItemsMainTitle } from "./components/itemsMainTitle";
import { SortTextForm } from "./components/sortTextForm";
import { FilterIcon } from "./components/filterIcon";

import { getFormData, getRightFormatTime } from "./scripts/scripts";

class App extends Component {
  constructor() {
    super();

    const listData = localStorage.data ? JSON.parse(localStorage.data) : [];
    this.state = {
      listData: listData,
      isOpen: false,
      isFilterOpen: false,
      value: 0
    };
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
    const arrayOfTasks = [...this.state.listData].filter(
      item => item.id !== id
    );
    localStorage.data = JSON.stringify(arrayOfTasks);
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  saveItem = id => {
    const arrayOfTasks = [...this.state.listData];
    arrayOfTasks.forEach(element => {
      if (element.id === id) element.isMaking = false;
    });
    localStorage.data = JSON.stringify(arrayOfTasks);
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  changeMakingStatus = id => {
    const arrayOfTasks = [...this.state.listData];
    arrayOfTasks.forEach(element => {
      if (element.id === id) element.isMaking = true;
    });
    localStorage.data = JSON.stringify(arrayOfTasks);
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  changeDoneStatus = id => {
    const arrayOfTasks = [...this.state.listData];
    arrayOfTasks.forEach(element => {
      if (element.id === id) element.done = !element.done;
    });
    localStorage.data = JSON.stringify(arrayOfTasks);
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  changeFormStatus = parameter => {
    console.log(parameter);
    return this.setState({ ...this.state, isOpen: parameter });
  };

  changeFilterStatus = parameter => {
    console.log(parameter);
    return this.setState({ ...this.state, isFilterOpen: parameter });
  };

  changeText = (id, text, parameter) => {
    const arrayOfTasks = [...this.state.listData];

    if (parameter === "title") {
      arrayOfTasks.forEach(element => {
        if (element.id === id) element.title = text;
      });
    }

    if (parameter === "task") {
      arrayOfTasks.forEach(element => {
        if (element.id === id) element.text = text;
      });
    }
    return this.setState({ ...this.state, listData: arrayOfTasks });
  };

  filterList = (value, parameter = "text") => {
    const defaultArray = localStorage.data ? JSON.parse(localStorage.data) : [];

    if (parameter) {
      let arrayOfFilteredTasks = [];
      if (parameter === "text") {
        arrayOfFilteredTasks = defaultArray.filter(
          element => element.text.indexOf(value) >= 0
        );
      }
      if (parameter === "time") {
        arrayOfFilteredTasks = defaultArray.filter(
          element => element.timeInMs <= value
        );
      }

      return this.setState({ ...this.state, listData: arrayOfFilteredTasks });
    }
    return this.setState({ ...this.state, listData: defaultArray });
  };

  filterTimeList = value => {
    if (value === "100") {
      const today = +new Date();
      return this.filterList(today, "time");
    } else if (value === "50") {
      const yesterday = this.getConstantDay(new Date()) - 86400000;
      return this.filterList(yesterday, "time");
    } else {
      const dayBeforeYesterday = this.getConstantDay(new Date()) - 86400000 * 2;
      this.filterList(dayBeforeYesterday, "time");
    }
  };

  getConstantDay = time => {
    let day = getRightFormatTime(time);
    let constantDay = new Date(day);
    return constantDay.getTime();
  };

  render() {
    const { isOpen, listData, isFilterOpen } = this.state;
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
        <OpenIcon isOpen={isOpen} changeFormStatus={this.changeFormStatus} />
        <AddForm
          isOpen={isOpen}
          addItem={this.addItem}
          changeFormStatus={this.changeFormStatus}
          getFormData={getFormData}
        />
        <FilterIcon
          isFilterOpen={isFilterOpen}
          changeFilterStatus={this.changeFilterStatus}
        />
        <SortTextForm
          filterList={this.filterList}
          isFilterOpen={isFilterOpen}
          changeFilterStatus={this.changeFilterStatus}
          filterTimeList={this.filterTimeList}
        />
      </div>
    );
  }
}

export default App;
