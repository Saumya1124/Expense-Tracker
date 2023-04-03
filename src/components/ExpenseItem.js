import './ExpenseItem.css'
function ExpenseItem(props){
   
    const expenseLocation = 'Noida';
    return (
    <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <h2>{expenseLocation}</h2>
        </div>
    </div>
    
    );
}

export default ExpenseItem;