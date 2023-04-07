import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
import './ExpenseItem.css'
const ExpenseItem = (props) => {

    const clickHandler = ()=>{
        console.log('Clicked!!!')
    }

    const deleteExpense=()=>{
        var e=document.getElementsByClassName('abc')
        e.parentNode.removeChild(e)
    
    }
    
    return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date} className='abc'></ExpenseDate>
        <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
        <button onClick={clickHandler}>Change title</button>
        <button onClick={()=>deleteExpense()}>Delete</button>
    </Card>
    
    );
}

export default ExpenseItem;