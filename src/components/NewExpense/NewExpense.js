import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData)
    }

    const [expenseView, updateExpenseView] = useState(false);

    const expenseViewHandler = () => {
        updateExpenseView(!expenseView)
    };

    return (
        <div class="new-expense">
            {!expenseView && <button type="new-expense button" onClick={expenseViewHandler}>Add New Expense</button>}
            {expenseView && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onUpdateExpenseView={expenseViewHandler} />}
        </div>
    )
};

export default NewExpense;
