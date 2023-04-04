import './ExpenseItem.css'
function ExpenseDetails(props){

    return(
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <h2>{props.location}</h2>
        </div>
    )
}

export default ExpenseDetails