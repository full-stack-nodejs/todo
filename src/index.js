import reactDom from "react-dom";

const TodoList = () => {
  const items = ["Drink coffee", "Build Awesome App"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  return <input placeholder={searchText} />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

reactDom.render(<App />, document.getElementById("root"));
