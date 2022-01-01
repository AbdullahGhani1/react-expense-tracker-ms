import React, { useState } from "react";
import ExpensesList from "./ExpencesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
