import React from 'react'
import '../styles/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
export default function ExpenseItem(props) {
   
   return (
        <div className="expense-item">
           <ExpenseDate date={props.expenseDate}/>
            <div className="expense-item__description">
                <h2>{props.expenseTitle}</h2>
                <div className="expense-item__price">$ {props.expenseAmount}</div>
            </div>
        </div>
    )
}
