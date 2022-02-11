import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const expenseValues = props.dataPoints.map(
    (expenseValue) => expenseValue.value
  );
  const maxValue = Math.max(...expenseValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
