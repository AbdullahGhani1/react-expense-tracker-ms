import React, { useState } from "react";
import { expenses } from "../../data/expenses";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
export default function Expenses() {
  const [filteredYear, setFilteredYear] = useState("2021");
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
        {expenses.map((value, key) => {
          return (
            <ExpenseItem
              key={key}
              expenseDate={value.date}
              expenseTitle={value.title}
              expenseAmount={value.amount}
            />
          );
        })}
      </Card>
    </div>
  );
}
