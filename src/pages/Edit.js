import axios from 'axios';
import React from 'react'
import { apiURL } from '../util/apiURL';
import { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from "react-router-dom";


const API = apiURL();

function Edit({updateTransaction}) {
    let history = useHistory();
    let { id } = useParams();
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        from: "",
        amount: 0,
    })

    useEffect(() => {
        axios.get(`${API}/transactions/${id}`)
        .then((response) => setTransaction(response.data),
          (error) => history.push(`/not-found`)
        );
      }, [id, history]);

    const handleInput = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }

    const handleNumInput = (e) => {
        setTransaction({...transaction, [e.target.id]: Number(e.target.value)})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTransaction(transaction, id)
        history.push(`/transactions/${id}`)
    }

    return (
        <>
        <h1>Update</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date</label>
          <input type="date" id="date"  onChange={handleInput} required/>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={transaction.name} onChange={handleInput} required/>
          <label htmlFor="from">From</label>
          <input type="text" id="from" value={transaction.from} onChange={handleInput} required/>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={transaction.amount} onChange={handleNumInput} required/>
          <input type="submit" />
        </form>
      </>
    )
}

export default Edit
