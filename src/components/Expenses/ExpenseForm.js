import { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    const titleChangeHandler = (event) => {

        console.log(event.target.value)

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
                         <input type="text"  onChange={titleChangeHandler}></input>

                      </div>

                      <div className="new-expense__controls">
                         <label>Date</label>
                         <input type="date"  onChange={titleChangeHandler}></input>

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