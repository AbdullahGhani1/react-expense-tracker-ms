import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id:'e1',
      title:'Toilet Paper',
      amount: 94.12,
      date: new Date(2020,11, 7),
    },
    {
      id:'e2',
      title:'LED TV',
      amount: 799.49,
      date: new Date(2021,2, 12),
    },
    {
      id:'e3',
      title:'Buy a Car ',
      amount: 10000,
      date: new Date(2021,4, 8),
    },
    {
      id:'e4',
      title:'New Mobile',
      amount: 300,
      date: new Date(2021,7, 24),
    },
  ]
  // const expenseDate= new Date(2021, 10, 19);
  return (
expenses.map((value,key) => {
  return <ExpenseItem key={key} expenseDate={value.date.toISOString()} expenseTitle={value.title} expenseAmount={value.amount}/>
})      
    // <ExpenseItem expenseDate={expenseDate.toISOString()} expenseTitle='Play Sex Game' expenseAmount={2000}/>,
    // <ExpenseItem expenseDate={expenseDate.toISOString()} expenseTitle='fuct your Ass hole' expenseAmount={4000}/>
    );
}

export default App;
