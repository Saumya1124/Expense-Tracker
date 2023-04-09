import { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle , setNewTitle] = useState('')


    const titleChangeHandler = (event) => {

        console.log(event.target.value)

        const title1 = event.target.value

        setNewTitle(title1)

        console.log(enteredTitle)
    }

    const [enteredAmount , setNewAmount] = useState('')


    const amountChangeHandler = (event) => {

        console.log(event.target.value)

        const amount1 = event.target.value

        setNewTitle(amount1)

        console.log(enteredAmount)
    }

    const [enteredDate , setNewDate] = useState('')


    const dateChangeHandler = (event) => {

        console.log(event.target.value)

        const date1 = event.target.value

        setNewTitle(date1)

        console.log(enteredDate)
    }

   

    




    return (
        <div className="new-expense">
            <form>

                <div className="new-expense__controls">
                      <div className="new-expense__controls">
                         <label>Title</label>
                         <input type="text" onChange={titleChangeHandler}></input>

                      </div>

                      <div className="new-expense__controls">
                         <label>Amout</label>
                         <input type="text"  onChange={amountChangeHandler}></input>

                      </div>

                      <div className="new-expense__controls">
                         <label>Date</label>
                         <input type="date"  onChange={dateChangeHandler}></input>

                      </div>

                </div>

                <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                </div>
{/*                   
                  <input type="text" placeholder='Expense title' id = 'title'></input>
                  <br></br>
                  <input type="text" placeholder='Expense amount'></input>
                  <br></br>
                  <input type="text" placeholder='Expense date'></input>
                  <br></br>
                  <button onClick={storingData}>Submit</button> */}
            </form>
        </div>
    )

}

export default ExpenseForm