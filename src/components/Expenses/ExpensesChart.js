import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const expenses = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const item of props.items) {
    const itemMonth = item.date.getMonth();
    expenses[itemMonth].value += item.amount;
  }

  return <Chart dataPoints={expenses} />;
};

export default ExpensesChart;
