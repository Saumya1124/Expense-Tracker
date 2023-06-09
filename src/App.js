import React, {useState} from "react";
// import ExpenseDate from "./components/Expenses/ExpenseDate";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
function App() {

  const expenses = [
    {title:'Car Expense', amount:294.47, date : new Date (2021,2,28), location :'Noida'},
    {title:'Flat Expense', amount:294.47, date : new Date (2021,4,28),location :'Delhi'},
    {title:'Food Expense', amount:294.47, date : new Date (2021,6,28),location :'Greater Noida'},
    {title:'Electricity Expense', amount:294.47, date : new Date (2021,8,28),location :'Delhi'},
  ];

  var data = []

  for(var i=0 ; i<expenses.length; i++){
    data.push(<ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date} location={expenses[i].location}></ExpenseItem>)
  }

  // return React.createElement('div',{},
  // React.createElement(ExpenseDate,{date:'props.date'},
  // React.createElement('div',{},
  // React.createElement('h1',{},'Expense1'),
  // React.createElement('h1',{},'Expense1')
  //  )));

  const [newExpense , setNewExpense] = useState(expenses) 

  const saveExpenseHandler = (enteredExpenseData) => {

    

    const expenseData = {
        ...enteredExpenseData,
        id : Math.random().toString()
    };

    console.log(expenseData)


    // setNewExpense([expenseData,...expenses])
    setNewExpense((prevExpenses)=>{
      return [...prevExpenses,enteredExpenseData]
    })


    

  }
  
  console.log(newExpense)


  return(
    <div>
      <h2>Let's get started!</h2>

      {/* <div>{data}</div> */}

      {newExpense.map((expense) => 
          <ExpenseItem 
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
          />
           
        
      )}
      
      
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} location={expenses[0].location}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} location={expenses[1].location}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} location={expenses[2].location}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} location={expenses[3].location}></ExpenseItem> */}
    

    <ExpenseForm onSaveData = {saveExpenseHandler}></ExpenseForm>
    </div>


    
  );
}

export default App;
