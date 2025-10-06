import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { ExpenseItemProps } from "../../types/expense";
import "./ExpenseItem.css";

const ExpenseItem: React.FC<ExpenseItemProps> = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date2={props.date1} />
        <div className="expense-item__description">
          <h2>{props.title1}</h2>
          <div className="expense-item__price">Rp {props.amount1},-</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
