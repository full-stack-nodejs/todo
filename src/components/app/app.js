import { Component } from "react";

import { AppHeader } from "../app-header/app-header.js";
import { SearchPanel } from "../search-panel/search-panel.js";
import { TodoList } from "../todo-list/todo-list.js";
import { ItemStatusFilter } from "../item-status-filter/item-status-filter.js";

import "./app.css";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 },
      ],
    };
    this.deletedItem = (id) => {
      this.setState(({ todoData }) => {
        const newTodoData = [...todoData];
        const idx = newTodoData.findIndex((el) => el.id === id);
        newTodoData.splice(idx, 1);

        return {
          todoData: newTodoData,
        };
      });
    };
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deletedItem} />
      </div>
    );
  }
}
