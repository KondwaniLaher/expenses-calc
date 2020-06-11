import React from "react";
import "./App.css";
import Title from "./components/Title";
import Items from "./components/Items";
import ExpenseAdder from "./components/ExpenseAdder";
import TotalSpend from "./components/Total";

class App extends React.Component {
  state = {
    items: [
      { name: "Venti Latte", price: 3.0 },
      { name: "Parking", price: 2.5 },
    ],
  };
  render() {
    return (
      <div className="App">
        <Title />
        <ExpenseAdder />
        <Items items={this.state.items} />
        <TotalSpend />
      </div>
    );
  }
}

export default App;
