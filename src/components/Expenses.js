import React from 'react'
import { expenses } from '../data/expenses'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import '../styles/Expenses.css'
export default function Expenses() {
    return (
        <Card className="expenses">
   { expenses.map((value,key) => {
      return <ExpenseItem key={key} expenseDate={value.date} expenseTitle={value.title} expenseAmount={value.amount}/>
    })      
   } 
     </Card>
    )
}
