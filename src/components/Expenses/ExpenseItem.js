import React,{useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
export default function ExpenseItem(props) {
    const [title,setTitle] = useState(props.expenseTitle) ;
    console.log('ExpenseItem evaluated by React')
    const clickHandler=()=>{
        setTitle('Updates')
        console.log('Clicked!')
    }
   return (
        <Card className="expense-item">
           <ExpenseDate date={props.expenseDate}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">$ {props.expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
