import React from "react";

class TotalExpense extends React.Component {
  state = {
    total: "",
  };
  render() {
    return (
      <>
        <label>
          <h1>Your total spend today is £</h1>
          <output></output>;
        </label>
      </>
    );
  }
}

export default TotalExpense;
