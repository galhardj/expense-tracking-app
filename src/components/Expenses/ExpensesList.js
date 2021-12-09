import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">There's no expense yet in the selected year</h2>;
    }

    return (
        <ul class="expenses-list">
            {props.items.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title1={expense.title}
                    amount1={expense.amount}
                    date1={expense.date}
                />
            ))}
        </ul>
    )

}

export default ExpensesList;
