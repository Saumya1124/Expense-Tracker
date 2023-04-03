import ExpenseItem from "./components/ExpenseItem";
function App() {

  const expenses = [
    {title:'Car Expense', amount:294.47, date : new Date (2021,2,28)},
    {title:'Flat Expense', amount:294.47, date : new Date (2021,4,28)},
    {title:'Food Expense', amount:294.47, date : new Date (2021,6,28)},
    {title:'Electricity Expense', amount:294.47, date : new Date (2021,8,28)},
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
    
  );
}

export default App;
