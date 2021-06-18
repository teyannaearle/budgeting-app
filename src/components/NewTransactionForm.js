import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function NewTransactionForm({addTransaction}) {
    let history = useHistory();
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        from: "",
        amount: "",
        negative: false
    })

    
    const handleInput = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }

    const handleNumInput = (e) => {
        setTransaction({...transaction, [e.target.id]: Number(e.target.value)})
    }

    const handleCheckBox = () => {
        if (transaction.amount){
            setTransaction({...transaction, negative: !transaction.negative})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTransaction(transaction)
        history.push(`/transactions`)

    }

    const handleCancel = () => {
        history.push(`/`)
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={transaction.date} onChange={handleInput} required/>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={transaction.name} onChange={handleInput} placeholder="Name" required/>
          <label htmlFor="from">From</label>
          <input type="text" id="from" value={transaction.from} onChange={handleInput} placeholder="From" required/>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={transaction.amount} onChange={handleNumInput} placeholder="0" min="0"required/>
          <span>
              <input type="checkbox" onChange={handleCheckBox} checked={transaction.negative}/>
              <label htmlFor="checkbox">Check for negative dollar amount </label>       
          </span>
          <input type="submit" className="button submit"/>
        </form>
        <button className="button submit" onClick={handleCancel}>Cancel</button>
    </>
    )
}

export default NewTransactionForm
