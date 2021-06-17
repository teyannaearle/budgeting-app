import React, { useState, useEffect } from 'react'
import TransactionList from '../components/TransactionList'

function Index({transactions}) {
    // const [transactionArray, setTransactions] = useState([])
    const [sum, setSum] = useState(0)

    // useEffect(() =>{
    //     setTransactions(transactions)
    //     setSum(transactionArray ? transactionArray.map(transaction => transaction.amount).reduce((a,b) => a + b, 0) : 0)
    // }, [transactions, transactionArray])

    useEffect(()=>{
        setSum(transactions.map(transaction => transaction.amount).reduce((a,b) => a + b, 0))
    }, [transactions])    

    return ( 
    <div id="index">
        <h1>Transactions </h1>
        <h3>Total: <span className={sum > 0 ? "positive" : "negative"}>${sum}</span></h3>
        <TransactionList transactions={transactions}/> 
    </div>
    )
}

export default Index
