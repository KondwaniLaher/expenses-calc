import React from "react";

class TotalExpense extends React.Component {
  render(totalSum) {
    // let { result } = this.props;
    return (
      <h1 className="total">
        <p>Your total spend today is £5.50 "result"</p>
      </h1>
    );
  }
}

export default TotalExpense;
