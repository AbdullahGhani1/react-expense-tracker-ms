import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpencesList.css";

function ExpencesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expenseTitle={expense.title}
            expenseAmount={expense.amount}
            expenseDate={expense.date}
          />
        );
      })}
      ;
    </ul>
  );
}

export default ExpencesList;
