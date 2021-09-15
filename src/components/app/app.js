import { AppHeader } from "../app-header/app-header.js";
import { SearchPanel } from "../search-panel/search-panel.js";
import { TodoList } from "../todo-list/todo-list.js";
import { ItemStatusFilter } from "../item-status-filter/item-status-filter.js";

import "./app.css";

export const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};
