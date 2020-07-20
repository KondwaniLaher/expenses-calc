import React from "react";
import "./App.css";
import Title from "./components/Title";
import Items from "./components/Items";
import ExpenseAdder from "./components/ExpenseAdder";
import Total from "./components/Total";

class App extends React.Component {
  state = {
    items: [
      { name: "Venti Latte", price: 3.0 },
      { name: "Parking", price: 2.5 },
    ],
    totalSum: "result",
  };

  addExpense = (stuff) => {
    this.setState((current) => {
      return { items: [stuff, ...current.items] };
    });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <ExpenseAdder addExpense={this.addExpense} />
        <Items items={this.state.items} />
        <Total />
      </div>
    );
  }
}

export default App;
