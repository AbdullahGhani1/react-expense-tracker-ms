import React from 'react'
import '../styles/ExpenseItem.css'
export default function ExpenseItem(props) {
    // const expenseDate= new Date(2021, 10, 19);
    // const expenseTitle= 'Car Insurance';
    // const expenseAmount= 294.67;
    return (
        <div className="expense-item">
            <div>{props.expenseDate}</div>
            <div className="expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className="expense-item__price">${props.expenseAmount}</div>
            </div>
        </div>
    )
}
