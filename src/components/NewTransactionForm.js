import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import axios  from 'axios';
import { apiURL } from '../util/apiURL';

const API = apiURL()

function NewTransactionForm({addTransaction}) {
    let history = useHistory();
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        from: "",
        amount: 0,
    })

    useEffect(()=>{
        axios.get(`${API}/transactions`).then((response) => {
         const { data } = response
         if (data[0]){
             let id = data[data.length -1].id + 1
             setTransaction({id: id, ...transaction})
         } else{
            setTransaction({id: 0, ...transaction})
         }
        })
    },[transaction])

    const handleInput = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }

    const handleNumInput = (e) => {
        setTransaction({...transaction, [e.target.id]: Number(e.target.value)})
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
          <input type="number" id="amount" value={transaction.amount} onChange={handleNumInput} required/>
          <input type="submit" className="button submit"/>
        </form>
        <button className="button submit" onClick={handleCancel}>Cancel</button>
    </>
    )
}

export default NewTransactionForm
