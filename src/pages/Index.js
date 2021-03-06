import React, { useEffect, useState } from 'react'
import TransactionList from '../components/TransactionList'
import axios from "axios"
import { apiURL } from "../util/apiURL"

const API = apiURL()

function Index({transactions}) {  
    const [sum, setSum] = useState((0))

    useEffect(()=> {
        axios.get(`${API}/transactions/sum`)
        .then(response => {
            setSum(response.data)
        })
        .catch(error => console.log(error))
    }, [transactions])

    return ( 
    <div id="index">
        <h1>Transactions </h1>
        <h3>Total: <span className={sum > 0 ? "positive" : "negative"}>${new Intl.NumberFormat().format(sum.toFixed(2))}</span></h3>
        <TransactionList transactions={transactions}/> 
    </div>
    )
}

export default Index
