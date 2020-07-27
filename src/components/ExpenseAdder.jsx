import React from "react";

class ExpenseAdder extends React.Component {
  state = {
    name: "",
    price: null,
    quantity: null,
    category: "food",
    result: null,
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    this.props.addExpense({ ...this.state });
    this.setState(
      (current) => {
        return { name: "", price: null, quantity: null };
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
<<<<<<< HEAD
          <button onClick={this.calculate}>Add Item!</button>
          <select name="category" id="cat"></select>
          <label>
            Quantity:{" "}
            <input type="" />
          </label>
=======
          Quantity:{" "}
          <input
            type="number"
            onChange={this.handleInput}
            id="quantity"
            min="1"
            value={this.state.quantity}
          />
        </label>
        <label>
          <select name="category" id="category" onChange={this.handleInput}>
            <option value={this.state.accommodation}>accommodation</option>
            <option value={this.state.food}>food</option>
          </select>
>>>>>>> 1d2119a184084ba97a560208b3bc7788c2246264
        </label>
        <br></br>
        <button onClick={this.calculate}>Add Item!</button>
      </form>
    );
  }
}

export default ExpenseAdder;
