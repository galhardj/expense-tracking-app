import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title2, updateTitle] = useState(props.title1);

  const clickHandler = () => {
    updateTitle("Clicked!!");
    console.log(props.title1);
    console.log(title2);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date2={props.date1} />
      <div className="expense-item__description">
        <h2>{title2}</h2>
        <div className="expense-item__price">Rp {props.amount1},-</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
