import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { logEvent } from "../../lib/analytics";

const NewExpense = (props) => {
  const [expenseView, updateExpenseView] = useState(false);

  const expenseViewHandler = () => {
    updateExpenseView(!expenseView);
    logEvent("Button", "Clack", "Subscribe Button");
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!expenseView && (
        <button type="new-expense button" onClick={expenseViewHandler}>
          Add New Expense
        </button>
      )}
      {expenseView && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onUpdateExpenseView={expenseViewHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
