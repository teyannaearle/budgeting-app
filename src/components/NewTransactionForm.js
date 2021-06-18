import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"

function NewTransactionForm({addTransaction}) {
    let history = useHistory();
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        from: "",
        amount: 0,
        id: uuidv4()
    })

    const handleInput = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }

    const handleNumInput = (e) => {
        setTransaction({...transaction, [e.target.id]: Number(e.target.value)})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTransaction(transaction)
        history.push("/transactions")

    }

    return (
      <form onSubmit={handleSubmit} className="form">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={transaction.date} onChange={handleInput} required/>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={transaction.name} onChange={handleInput} placeholder="Name" required/>
          <label htmlFor="from">From/To</label>
          <input type="text" id="from" value={transaction.from} onChange={handleInput} placeholder="From/To" required/>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={transaction.amount} onChange={handleNumInput} required/>
          <input type="submit" className="button submit"/>
      </form>
    )
}

export default NewTransactionForm
