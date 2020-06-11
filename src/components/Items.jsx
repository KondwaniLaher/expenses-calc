import React from "react";

const Items = (props) => {
  const { items } = props;
  return (
    <>
      <ul>
        {items.map((stuff) => {
          return (
            <li key={stuff.name}>
              <h2>{stuff.name}</h2>
              <h2>{stuff.price}</h2>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Items;
