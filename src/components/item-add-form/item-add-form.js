import { Component } from "react";
import "./item-add-form.css";

export class ItemAddForm extends Component {
  constructor() {
    super();
    this.setState = {};
  }

  render() {
    return (
      <div className="item-add-form">
        <button className="btn btn-outline-secondary" onClick={() => this.props.onAdded("Hello")}>Add Item</button>
      </div>
    );
  }
}
