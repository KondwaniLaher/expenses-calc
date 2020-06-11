import React from "react";

class ExpenseAdder extends React.Component {
  state = {
    name: "",
    price: "",
  };

  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Item Name: <input type="text" />
        </label>
        <label>
          Item Price: <input type="text" />
        </label>
        <button>Add Item!</button>
      </form>
    );
  }
}

export default ExpenseAdder;
