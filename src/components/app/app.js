import { Component } from "react";

import { AppHeader } from "../app-header/app-header.js";
import { SearchPanel } from "../search-panel/search-panel.js";
import { TodoList } from "../todo-list/todo-list.js";
import { ItemStatusFilter } from "../item-status-filter/item-status-filter.js";
import { ItemAddForm } from "../item-add-form/item-add-form.js";

import "./app.css";
export class App extends Component {
  constructor() {
    super();

    this.maxId = 1000;

    this.state = {
      todoData: [
        this.createTodoItem("Drink Coffee"),
        this.createTodoItem("Make Awesome App"),
        this.createTodoItem("Have a lunch"),
      ],
      term: "",
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

    this.addedItem = (label) => {
      const newItem = this.createTodoItem(label);

      this.setState(({ todoData }) => {
        return { todoData: [...todoData, newItem] };
      });
    };

    this.onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, "important"),
        };
      });
    };

    this.onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, "done"),
        };
      });
    };

    this.onSearchChange = (term) => {
      this.setState({ term });
    };
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const newArr = [...arr];
    newArr[idx][propName] = !newArr[idx][propName];
    return newArr;
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {
    const { todoData, term } = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done === true).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deletedItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAdded={this.addedItem} />
      </div>
    );
  }
}
