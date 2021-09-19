import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title1={props.items[0].title}
        amount1={props.items[0].amount}
        date1={props.items[0].date}
      />
      <ExpenseItem
        title1={props.items[1].title}
        amount1={props.items[1].amount}
        date1={props.items[1].date}
      />
      <ExpenseItem
        title1={props.items[2].title}
        amount1={props.items[2].amount}
        date1={props.items[2].date}
      />
      <ExpenseItem
        title1={props.items[3].title}
        amount1={props.items[3].amount}
        date1={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
