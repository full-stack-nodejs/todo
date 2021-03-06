import { Component } from "react";
import "./search-panel.css";

export class SearchPanel extends Component {
  constructor() {
    super();

    this.state = {
      term: "",
    };

    this.onSearchChange = (e) => {
      const term = e.target.value;
      this.setState({ term });
      this.props.onSearchChange(term);
    };
  }
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
