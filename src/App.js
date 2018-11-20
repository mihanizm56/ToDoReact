import React, { Component } from "react";
import "./App.css";

import AddForm from "./components/addForm";
import OpenForm from "./components/openForm";
import ListItems from "./components/listItems";

import { getFormData } from "./scripts/scripts";

class App extends Component {
  constructor() {
    super();

    const listData = localStorage.data ? JSON.parse(localStorage.data) : [];
    this.state = { listData: listData, isOpen: false };
  }

  addItem = object => {
    if (object) {
      console.log(object);
      const listArray = [...this.state.listData];
      listArray.push(object);
      console.log(listArray);
      localStorage.data = JSON.stringify(listArray);
      return this.setState({ ...this.state, listData: listArray });
    }
  };

  changeFormStatus = parameter => {
    console.log(parameter);
    return this.setState({ ...this.state, isOpen: parameter });
  };

  render() {
    const { isOpen, listData } = this.state;
    return (
      <div className="App">
        <OpenForm isOpen={isOpen} changeFormStatus={this.changeFormStatus}>
          Добавить задачу
        </OpenForm>
        <AddForm
          isOpen={isOpen}
          addItem={this.addItem}
          changeFormStatus={this.changeFormStatus}
          getFormData={getFormData}
        />
        <ListItems listData={listData} />
        {/* <SortForm /> */}
      </div>
    );
  }
}

export default App;
