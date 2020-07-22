import React from "react";

class ExpenseAdder extends React.Component {
  state = {
    name: "",
    price: null,
    result: null,
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    this.props.addExpense({ ...this.state });
    this.setState(
      (current) => {
        return { name: "", price: null };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleInput = (InputEvent) => {
    const value = InputEvent.target.value;
    const id = InputEvent.target.id;
    this.setState(
      (current) => {
        return { [id]: value };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  calculate = () => {
    this.setState({
      // result: {this.state.price + current},
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Item Name:{" "}
          <input
            type="text"
            onChange={this.handleInput}
            id="name"
            value={this.state.name}
          />
        </label>
        <label>
          Item Price:{" "}
          <input
            type="text"
            onChange={this.handleInput}
            id="price"
            value={this.state.price}
          />
        </label>
        <label>
          <button onClick={this.calculate}>Add Item!</button>
          <select name="category" id="cat"></select>
          <label>
            Quantity
            <input type="num" />
          </label>
        </label>
      </form>
    );
  }
}

export default ExpenseAdder;
